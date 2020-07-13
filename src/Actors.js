
const { ManageALocalServer } =require('@serenity-js/local-server');
const { BrowseTheWeb } =require('@serenity-js/protractor');
const { protractor } =require('protractor');


module.exports.Actors= class Actors {
    prepare(actor) {
        return actor.whoCan(
            BrowseTheWeb.using(protractor.browser),
            
        );
    }
};



