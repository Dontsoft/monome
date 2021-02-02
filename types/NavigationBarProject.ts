import NavigationBarProjectPlan from '~/types/NavigationBarProjectPlan';

export default interface NavigationBarProject {
    id: string,
    name: string,
    plans: Array<NavigationBarProjectPlan>
}