import VuexPersistence from 'vuex-persist'
 
export default ({ store }) => {
  new VuexPersistence({
    key: 'monome',
    modules: ['admin', 'user']
  }).plugin(store);
}