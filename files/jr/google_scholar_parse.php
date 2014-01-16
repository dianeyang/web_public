<?

require("simple_html_dom.php");

$maxcite = 0;
$minyear = date("Y");

class Article
{
	public $title = "None";
	public $link = "None";
	public $cites = 0;
	public $author = "None";
	public $year = 0;
	public $searchdepth = 100;
	public $score = 0;
	
	public function tally_score($cites, $year, $searchdepth)
	{
		$this->score = (($cites/$maxcites) + ($year/$minyear))/$searchdepth;
	}
}

$articles = Array();
$query = "egypt+history";
$scholarlink = 'http://scholar.google.com/scholar?q='.$query.'&btnG=&hl=en';

function get_articles($scholarlink, $searchdepth)
{
	global $articles;

	$html = file_get_html($scholarlink);

	foreach($html->find('.gs_r') as $element) 
	{
		$title = $element->find('.gs_rt', 0)->plaintext;
		$title = str_replace("[CITATION] [C]", "", $title);
		$title = str_replace("[BOOK] [B]", "", $title);
		if (!array_key_exists($title, $articles))
		{
			$thisarticle = new Article;
			$thisarticle->link = $element->find('.gs_rt', 0)->find('a', 0)->plaintext;
			$thisarticle->title = $title;
			$cites = $element->find('.gs_fl', 0)->first_child()->plaintext;
			$relatedlink = "http://scholar.google.com".$element->find('.gs_fl', 0)->first_child()->next_sibling()->href;
			$thisarticle->cites = str_replace("Cited by ", "", $cites);
			$AYP = explode("-", $element->find('.gs_a', 0)->plaintext);
			$thisarticle->author = $AYP[0];
			$thisarticle->year = $AYP[1];
	
			if ($maxcite<$cites)
				$maxcite = $cites;
		
			if ($minyear>$year)
				$minyear = $year;

			if ($searchdepth > 0)
				get_articles($relatedlink, $searchdepth-1);
		
			$articles[$title] = $thisarticle;
		
		}
	}
}

get_articles($scholarlink, 1);

foreach ($articles as $art)
{
	echo $art->title." | Score: ";
	echo "<br>";
}


?>