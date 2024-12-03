import { inject, Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";
import { catchError, throwError } from "rxjs";

import { Product } from "../models/product.model";

@Injectable({
    providedIn: "root"
})
export class ProductServices {
    private httpClient = inject(HttpClient);

    fetchProducts() {
        return this.httpClient.get<Product[]>(`https://fakestoreapi.com/products`)
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