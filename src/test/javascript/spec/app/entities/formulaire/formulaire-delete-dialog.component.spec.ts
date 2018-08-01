/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { FormationSofTestModule } from '../../../test.module';
import { FormulaireDeleteDialogComponent } from 'app/entities/formulaire/formulaire-delete-dialog.component';
import { FormulaireService } from 'app/entities/formulaire/formulaire.service';

describe('Component Tests', () => {
    describe('Formulaire Management Delete Component', () => {
        let comp: FormulaireDeleteDialogComponent;
        let fixture: ComponentFixture<FormulaireDeleteDialogComponent>;
        let service: FormulaireService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [FormationSofTestModule],
                declarations: [FormulaireDeleteDialogComponent]
            })
                .overrideTemplate(FormulaireDeleteDialogComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(FormulaireDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(FormulaireService);
            mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
        });

        describe('confirmDelete', () => {
            it('Should call delete service on confirmDelete', inject(
                [],
                fakeAsync(() => {
                    // GIVEN
                    spyOn(service, 'delete').and.returnValue(of({}));

                    // WHEN
                    comp.confirmDelete(123);
                    tick();

                    // THEN
                    expect(service.delete).toHaveBeenCalledWith(123);
                    expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                    expect(mockEventManager.broadcastSpy).toHaveBeenCalled();
                })
            ));
        });
    });
});
