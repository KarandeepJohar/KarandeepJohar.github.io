$(document).ready(function() {
    playPuppies(puppies_json);
});

function playPuppies(puppies) {
    var puppies_seen = [];
    var ask_about_adoption_after_x_puppies = 5;

    //these are ascii codes!
    var keycodes = {
        spacebar: 32,
        left_arrow: 37,
        right_arrow: 39,
        up_arrow: 38,
        down_arrow: 40
    }

    function pickUpPuppy() {
      var puppyCount = puppies.length;
      return puppies[Math.floor(Math.random() * puppyCount)];
    }

    function makeURL(newPup, extension) {
        return 'https://i.imgur.com/' + newPup + '.' + extension;
    }

    function newPuppy() {

        var newPup = pickUpPuppy();

        while (puppies_seen.indexOf(newPup) != -1) {
            newPup = pickUpPuppy();
        }

        puppies_seen.push(newPup);
        return  newPup;

    }

    function loadPuppy() {
        var newPup = newPuppy();
        $('#puppy > source').attr('src', newPup);
        $('.permalink a').attr('href', newPup);
        // console.log($('#puppy > source').attr('src'));
        $('.permalink').load();
    }

    function showPuppy(newPup) {
        var url;

        url = makeURL(newPup, 'mp4');
        $('#puppy > source').attr('src', url);
        $('#puppy').load();
        

        $('.permalink').attr('href', url);
    }

    function loadNextPuppy() {
        var newPup = newPuppy();
        loadPuppy(newPup);
    }

    function loadPuppy(pup) {
        showPuppy(pup);
        history.pushState({pup: pup}, '', '#' + pup);
    }

    function initialPuppy(pup) {
        showPuppy(pup);
        history.replaceState({pup: pup}, '', '#' + pup);
    }

    $(document).keyup(function(evt) {
        if (evt.keyCode == keycodes.spacebar) {
            loadNextPuppy();
        } else if (evt.keyCode == keycodes.left_arrow) {
            history.back();
        } else if (evt.keyCode == keycodes.right_arrow) {
            history.forward();
        } else if (evt.keyCode == keycodes.up_arrow) {
              puppies = puppies_json;
              loadNextPuppy();
            
        } else if (evt.keyCode == keycodes.down_arrow) {
                puppies = kittens_json;
                loadNextPuppy();
        }
    });

    // If the user tries reloading to find a new puppy, inform them of the spacebar
    $(window).bind('beforeunload', function() {
        return "To see a new puppy, hit the spacebar instead of reloading";
    });

    window.addEventListener('popstate', function(e) {
        if (e.state && e.state.pup) {
            showPuppy(e.state.pup);
        }
    });

    $(document).on('click', loadNextPuppy);

    var initial_pup = window.location.hash.substring(1);
    if (puppies.indexOf(initial_pup) != -1) {
        initialPuppy(initial_pup);
    } else {
        initialPuppy(newPuppy());
    }

}


var kittens_json = [
    "tJo6EgI",
    "jc8S66y",
    "xzJSVwF",
    "2EKpscX",
    "riYp47J",
    "C0kXkKf",
    "DN2MAJF",
    "oBMON5d",
    "sJd5KAW",
    "agtAVDt",
    "bpjtlos",
    "hTEn6Po",
    "3vwht5p",
    "gRIMhWb",
    "RDJZv4S",
    "k0WbZHU",
    "4ijXPRB",
    "o7KJKRe",
    "4chW53l",
    "0uQFkGp",
    "ANkEV0N",
    "4p5kGdo",
    "tA1NepU",
    "NsJ7GIR",
    "3VH9AlI",
    "8mqnWEs",
    "KM9klwW",
    "ylDtm6W",
    "8goh7yx",
    "4D81mZe",
    "ZQei12r",
    "147uW2m",
    "0uH7Get",
    "kvTIL82",
    "QxB0Unl",
    "oBMON5d",
    "sN18Tch",
    "bJVPHjc",
    "lK9xrXW",
    "hcM0fWA",
    "jhcN1Ke",
    "W0JfyHW",
    "P7RiAtO",
    "KWvtdg0",
    "frKhsH4",
    "ujAO1Dl",
    "n5iOc72",
    "LedvP7U",
    "Dvkr3SI",
    "pSX8esf",
    "6JqB7JO",
    "DBvAY2n",
    "OYLaMch",
    "rPLJXoJ",
    "7717Q58"
]


var puppies_json = [
    "2m78jPG",
    "pn1e9TO",
    "MQCIwzT",
    "udLK6FS",
    "ZNem5o3",
    "DS2IZ6K",
    "aydRUz8",
    "MVUdQYK",
    "kLvno0p",
    "QTAa2BV",
    "wScLiVz",
    "Z0TII8i",
    "F1SChho",
    "9hRi2jN",
    "lvzRF3W",
    "fqHxOGI",
    "1xeUYme",
    "6tVqKyM",
    "CCxZ6Wr",
    "lMW0OPQ",
    "wHVpHVG",
    "Wj2PGRl",
    "HlaTE8H",
    "k5jALH0",
    "3V37Hqr",
    "Eq2uMTA",
    "Vy9JShx",
    "g9I2ZmK",
    "Nu4RH7f",
    "sWp0Dqd",
    "bRKfspn",
    "qawCMl5",
    "2F6j2B4",
    "fiJxCVA",
    "pCAIlxD",
    "zJx2skh",
    "9EPRfmC",
    "2Gdl1u7",
    "aJJAY4c",
    "ros6RLC",
    "DKLBJh7",
    "eyxH0Wc",
    "rJEkEw4",
    "Fawbxgh",
    "bDYdPSV",
    "Qnf8N",
    "UdGqAqy",
    "ZproAeR",
    "O5mnnZa",
    "B0Myq5r",
    "Jh3QRKx",
    "iwe1n1K",
    "4r6dbiO",
    "PxInrJd",
    "T6nEhIE",
    "j8fxNyL",
    "1SSVsBH",
    "itsG83U",
    "knHUVKm",
    "eAhk0q7",
    "hcc0iD3",
    "oqpADX7",
    "14QJ3Mv",
    "MZcpVXr",
    "5uwTWuS",
    "7eGFo3I",
    "PXqxMIn",
    "crMgnzj",
    "85Pd59R",
    "SI34zqi",
    "qqXt0XG",
    "sSgql8d",
    "HblQhgb",
    "R8se5g1",
    "yUGhnBu",
    "1YraHb7",
    "GjAvXyl",
    "3kQgCoA",
    "fCMth05",
    "aEJwgJO",
    "nF79jOW",
    "LKag7cQ",
    "ES0JlkD",
    "dGW4BE3",
    "FPxZ8WK",
    "HT4pqjA",
    "0n25aBB",
    "QblQ8cO",
    "koFfZIf",
    "jHj0VTa",
    "AXcyili",
    "fIeN1ax",
    "0n25aBB",
    "PNDbG",
    "HdYeaTL",
    "ZEbDesn",
    "V35yPa0",
    "9uXYF8D",
    "DFwMrwa",
    "QlN4Z41",
    "yWdsKTY",
    "XNp6i0w",
    "uRvs9C1",
    "LgYJXIE",
    "W46GO1L",
    "4XjKcgP",
    "zfnh9YI",
    "2OU5zUY",
    "NQWTWXs",
    "kbQOwxB",
    "kuDfHaA",
    "ruufhZJ",
    "BXjdAp7",
    "jGwMi2i",
    "eWoEuqz",
    "rFU7vEe",
    "p6ghQIM",
    "GmTR0nS",
    "ncaCrme",
    "VDODyNP",
    "F4TnDE5",
    "XPxtVw7",
    "90tOilT",
    "jbLrCJc",
    "a/HuoIZ",
    "q8tAOYz"
]
