<?php

namespace App\Controller\Backend;

use App\Entity\Maintenance;
use App\Form\MaintenanceType;
use App\Repository\MaintenanceRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/backend/maintenance")
 */
class BackendMaintenanceController extends AbstractController
{
	const menu = "parametre";
	const sub_menu = "maintenance";
	
    /**
     * @Route("/", name="app_backend_maintenance_index", methods={"GET"})
     */
    public function index(MaintenanceRepository $maintenanceRepository): Response
    {
		$maintenace = $maintenanceRepository->findOneBy([],['id'=>"DESC"]);
		if ($maintenace)
			return $this->redirectToRoute('app_backend_maintenance_edit',[
				'id' => $maintenace->getId()
			]);
		else
			return $this->redirectToRoute('app_backend_maintenance_new');
		
    
    }

    /**
     * @Route("/new", name="app_backend_maintenance_new", methods={"GET", "POST"})
     */
    public function new(Request $request, MaintenanceRepository $maintenanceRepository): Response
    {
        $maintenance = new Maintenance();
        $form = $this->createForm(MaintenanceType::class, $maintenance);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $maintenanceRepository->add($maintenance);
            return $this->redirectToRoute('app_backend_maintenance_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('backend_maintenance/new.html.twig', [
            'maintenance' => $maintenance,
            'form' => $form,
	        'menu' => self::menu,
	        'sub_menu' => self::sub_menu,
        ]);
    }

    /**
     * @Route("/{id}", name="app_backend_maintenance_show", methods={"GET"})
     */
    public function show(Maintenance $maintenance): Response
    {
        return $this->render('backend_maintenance/show.html.twig', [
            'maintenance' => $maintenance,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="app_backend_maintenance_edit", methods={"GET", "POST"})
     */
    public function edit(Request $request, Maintenance $maintenance, MaintenanceRepository $maintenanceRepository): Response
    {
        $form = $this->createForm(MaintenanceType::class, $maintenance);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $maintenanceRepository->add($maintenance);
            return $this->redirectToRoute('app_backend_maintenance_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('backend_maintenance/edit.html.twig', [
            'maintenance' => $maintenance,
            'form' => $form,
	        'menu' => self::menu,
	        'sub_menu' => self::sub_menu,
        ]);
    }

    /**
     * @Route("/{id}", name="app_backend_maintenance_delete", methods={"POST"})
     */
    public function delete(Request $request, Maintenance $maintenance, MaintenanceRepository $maintenanceRepository): Response
    {
        if ($this->isCsrfTokenValid('delete'.$maintenance->getId(), $request->request->get('_token'))) {
            $maintenanceRepository->remove($maintenance);
        }

        return $this->redirectToRoute('app_backend_maintenance_index', [], Response::HTTP_SEE_OTHER);
    }
}
