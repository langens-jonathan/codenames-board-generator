import Ember from 'ember';

export default Ember.Controller.extend({
    fields: [],

    length: 7,

    width: 6,

    TEAM1: "width: 125px; height: 95px; background-color: #feffa5; display:inline-block; border: 2px solid black;",
    TEAM2: "width: 125px; height: 95px; background-color: #b4dc7f; display:inline-block; border: 2px solid black;",
    TEAM3: "width: 125px; height: 95px; background-color: #ffa0ac; display:inline-block; border: 2px solid black;",
    TEAM4: "width: 125px; height: 95px; background-color: #74d3ae; display:inline-block; border: 2px solid black;",
    team1Name: "canary",
    team2Name: "spring bud",
    team3Name: "schaus",
    team4Name: "aqua",

    SPY: "width: 125px; height: 95px; background-color: #353a47; display:inline-block; border: 2px solid black;",
    BYSTANDER: "width: 125px; height: 95px; background-color: grey; display:inline-block; border: 2px solid black;",

    init() {
        Ember.get(this, 'recalculate')(this);
    },

    recalculate(self) {
        var TEAM1 = "#feffa5";
        var TEAM2 = "#b4dc7f";
        var TEAM3 = "#ffa0ac";
        var TEAM4 = "#74d3ae";
        var team1Name = "canary";
        var team2Name = "spring bud";
        var team3Name = "schaus";
        var team4Name = "aqua";

        var SPY = "#353a47";
        var BYSTANDER = "grey";

        var array = [
            TEAM1, TEAM1, TEAM1, TEAM1, TEAM1, TEAM1, TEAM1, TEAM1,
            TEAM2, TEAM2, TEAM2, TEAM2, TEAM2, TEAM2, TEAM2,
            TEAM3, TEAM3, TEAM3, TEAM3, TEAM3, TEAM3, TEAM3,
            TEAM4, TEAM4, TEAM4, TEAM4, TEAM4, TEAM4, TEAM4,
            SPY, SPY, SPY
        ];

        var length = Ember.get(self, 'length');
        var height = Ember.get(self, 'width');

        var fieldCount = length * height;

        for(var i = array.length; i <= fieldCount; ++i) {
            array.push(BYSTANDER);
        }

        Ember.Logger.log(array);

        for(var i = 0; i < fieldCount*(length+height); ++i) {
            var x1 = Math.floor(Math.random() * fieldCount);
            var x2 = Math.floor(Math.random() * fieldCount);
            var tmp = array[x1];
            array[x1] = array[x2];
            array[x2] = tmp;
        }

        Ember.Logger.log(array);

        var outputArray = [];
        for(var i = 0; i < height; ++i) {
            outputArray[i] = [];
            for(var j = 0; j < length; ++j) {
                outputArray[i][j] = "width:120px; height:95px; border: 1px solid grey; padding:1px; display:inline-block; background-color:" + array[(i * length) + j] + ";";
            }
        }

        Ember.set(self, "fields", outputArray);
    },

    actions: {
        recalculate() {
            Ember.get(this, 'recalculate')(this);
        }
    }
});
