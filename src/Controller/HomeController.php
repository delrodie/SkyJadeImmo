<?php

namespace App\Controller;

use App\Entity\Maintenance;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
	
	
    /**
     * @Route("/", name="app_home")
     */
    public function index(ManagerRegistry $managerRegistry): Response
    {
		$maintenance = $managerRegistry->getRepository(Maintenance::class)->findOneBy([],['id'=>"DESC"]);
		
		if ($maintenance && $maintenance->getStatut())
			$render = 'home/maintenance.html.twig';
		else
			$render = 'home/index.html.twig';
		
        return $this->render($render,[
			'domaines' => false,
	        'presentation' => true,
	        'videos' => null,
	        'conseils' => null,
	        'menu' => 'ACCUEIL'
        ]);
    }
}
