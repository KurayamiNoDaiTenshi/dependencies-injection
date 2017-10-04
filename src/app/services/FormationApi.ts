import Formation from '../model/Formation';

export default class FormationApi {
  fetchFormation(): Promise<Array<Formation>> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          new Formation('Angular'),
          new Formation('JavaScript'),
          new Formation('TypeScript')
        ])
      })
    })
  }
}
