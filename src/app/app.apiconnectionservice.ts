import { Injectable } from '@angular/core';  
import { Http } from '@angular/http';
import { Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { ElementRef} from '@angular/core';
import 'rxjs/add/operator/timeout'


@Injectable()
export class APIConnectionService {
	
	constructor(private http:Http){}   
	
	getAPIResponse(url) {		
		return this.http.get(url,'').timeout(10000).map((response: Response) => {
		
		if(response){
			if (response.status === 200) {
				return response.json();
			}
		}		
		
		});				
	}	
	
}
