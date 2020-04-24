import { observable, action } from 'mobx';


export class imdbStore{
    @observable type = '';
    @observable year = '';
    @observable query='';
    @observable SearchResults=[];
    @observable favorites=[];

    @action setSearchResults(SearchResults)
    {
        this.SearchResults= SearchResults;
    }
    @action setFavorites(favorites) {
        this.favorites = favorites;
    }
    @action resetSearch(){
       this.type = '';
       this.year = '';
       this.query='';
    }
    @action noFavorties(){
        this.favorites=[];
    }
}

const store = new imdbStore();

export default store;