import Formation from '../model/Formation';
export default class FormationService{
  getFormation():Array<Formation>{
    return [
      new Formation('Angular','do awesome stuff in a single wep page'),
      new Formation('JavaScript','Do what you want it will do stuff'),
      new Formation('TypeScript','Do what you want typed version')
    ];
  }
}
