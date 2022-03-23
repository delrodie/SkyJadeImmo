<?php

namespace App\Controller\Frontend;

use phpDocumentor\Reflection\Types\Self_;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/qui-sommes-nous")
 */
class FrontendPresentationController extends AbstractController
{
	CONST menu = "PRESENTATION";
    /**
     * @Route("/", name="app_frontend_presentation")
     */
    public function index(): Response
    {
        return $this->render('frontend_presentation/index.html.twig', [
            'controller_name' => 'FrontendPresentationController',
	        'menu' => self::menu,
        ]);
    }
}
