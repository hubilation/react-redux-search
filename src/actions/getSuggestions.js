import {receiveSuggestions, requestSuggestions} from './'
import post from 'superagent'

export function getSuggestions(searchInput) {
    return function (dispatch) {
        // dispatch(requestSuggestions(searchInput))
        // return post("http://localhost:9200/suggestion/suggest/_search")
        //     .send({
        //         "size": 10,
        //         "query": {
        //             "match": {
        //             "_all": {
        //                 "query": searchInput,
        //                 "operator": "and"
        //             }
        //             }
        //         },
        //         "highlight" : {
        //             "fields" : {
        //                 "*" : {
        //                     "require_field_match": false
        //                 }
        //             }
        //         }
        //         }
        //     )
        //     .set("Authorization", "Basic ZWxhc3RpYzpjaGFuZ2VtZQ==")
        //     .set("Access-Control-Allow-Origin",  "*")
        //     .end(function(err,res){
        //         var obj = JSON.parse(res.text);
        //         var hits = obj.hits.hits;
        //         var sources = [];
        //         hits.forEach(function(element, index) {
        //             var source = element._source;
        //             source.all = source.year + ' ' + source.make + ' ' + source.model + ' ' + source.trim;
        //             source.key = index
        //             sources.push(source);
        //         }, this);

        //         dispatch(receiveSuggestions(searchInput, sources))
        //     })
        dispatch(requestSuggestions(searchInput))
        return new Promise((resolve,reject)=>{
            setTimeout(function(){
                var result = [{
                    all: 'test',
                    key: 1
                }];
                dispatch(receiveSuggestions(searchInput, result))
                resolve("Success")
            }, 250)
        });
    }
}