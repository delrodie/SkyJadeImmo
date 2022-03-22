<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
	
    /**
     * @Route("/", name="app_home")
     */
    public function index(): Response
    {
		$maintenance = true;
		if ($maintenance)
			$render = 'home/maintenance.html.twig';
		else
			$render = 'home/index.html.twig';
		
        return $this->render($render);
    }
}
