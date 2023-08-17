import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"

@Injectable({providedIn: 'root'}) //** optional */
export class DssataStorageService  {
 constructor (private http : HttpClient) {}
    
}