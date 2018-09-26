/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { BlogTestModule } from '../../../test.module';
import { ClassesMySuffixDeleteDialogComponent } from 'app/entities/classes-my-suffix/classes-my-suffix-delete-dialog.component';
import { ClassesMySuffixService } from 'app/entities/classes-my-suffix/classes-my-suffix.service';

describe('Component Tests', () => {
    describe('ClassesMySuffix Management Delete Component', () => {
        let comp: ClassesMySuffixDeleteDialogComponent;
        let fixture: ComponentFixture<ClassesMySuffixDeleteDialogComponent>;
        let service: ClassesMySuffixService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [BlogTestModule],
                declarations: [ClassesMySuffixDeleteDialogComponent]
            })
                .overrideTemplate(ClassesMySuffixDeleteDialogComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(ClassesMySuffixDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(ClassesMySuffixService);
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
