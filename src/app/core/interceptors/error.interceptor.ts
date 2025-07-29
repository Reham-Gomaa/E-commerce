import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const toastrService = inject(ToastrService);
  return next(req).pipe(
    catchError((err) => {
      let errorMessage = 'An unknown error occurred!';
      if (err.status === 0) {
        errorMessage = 'Network error. Check your connection.';
      } else if (err.status === 404) {
        errorMessage = 'Resource not found.';
      } else if (err.status >= 500) {
        errorMessage = 'Server error. Try again later.';
      } else if (err.error?.message) {
        errorMessage = err.error.message;
      }

      toastrService.error(err.error.message, 'Error');
      return throwError(() => err);
    })
  );
};
