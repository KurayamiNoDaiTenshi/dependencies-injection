import {Injectable} from "@angular/core";
import Formation from '../model/Formation';
import FormationApi from '../services/FormationApi';
@Injectable()
export default class FormationService{
  constructor(private formationApi:FormationApi){}
  getFormation():Promise<Array<Formation>>{
    return this.formationApi.fetchFormation();
  }
}
