import { inject, Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";
import { catchError, throwError } from "rxjs";

import { Products } from "./products.model";

@Injectable({
    providedIn: "root"
})
export class ProductServices {
    private httpClient = inject(HttpClient);

    fetchProducts() {
        return this.httpClient.get<Products[]>(`https://fakestoreapi.com/products`)
            .pipe(
                catchError((err) => {
                    console.log(err);
                    return throwError(
                        () => {
                            new Error(`Something went wrong`);
                        }
                    )
                })
            )
    }

}