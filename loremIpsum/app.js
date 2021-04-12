let ipsumArray = [
    "Look at these words. Are they small words? And he referred to my words - if they're small, something else must be small. I guarantee you there's no problem, I guarantee. I'm speaking with myself, number one, because I have a very good brain and I've said a lot of things.If Trump Ipsum weren’t my own words, perhaps I’d be dating it."+ "<br> <br>",
    "The concept of Lorem Ipsum was created by and for the Chinese in order to make U.S. design jobs non-competitive. I will write some great placeholder text – and nobody writes better placeholder text than me, believe me – and I’ll write it very inexpensively. I will write some great, great text on your website’s Southern border, and I will make Google pay for that text. Mark my words. Lorem Ipsum's father was with Lee Harvey Oswald prior to Oswald's being, you know, shot." + "<br> <br>",
    "Zombie ipsum brains reversus ab cerebellum viral inferno, brein nam rick mend grimes malum cerveau cerebro. De carne cerebro lumbering animata cervello corpora quaeritis. Summus thalamus brains sit​​, morbo basal ganglia vel maleficia? De braaaiiiins apocalypsi gorger omero prefrontal cortex undead survivor fornix dictum mauris. Hi brains mindless mortuis limbic cortex soulless creaturas optic nerve, imo evil braaiinns stalking monstra" + "<br> <br>",
    "Bacon ipsum dolor amet short ribs brisket venison rump drumstick pig sausage prosciutto chicken spare ribs salami picanha doner. Kevin capicola sausage, buffalo bresaola venison turkey shoulder picanha ham pork tri-tip meatball meatloaf ribeye. Doner spare ribs andouille bacon sausage. Ground round jerky brisket pastrami shank.",
    "Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip. Sea lettuce lettuce water chestnut eggplant winter purslane fennel azuki bean earthnut pea sierra leone bologi leek soko chicory celtuce parsley jícama salsify." + "<br> <br>",
    "Chase ball of string eat plants, meow, and throw up because I ate plants going to catch the red dot today going to catch the red dot today. I could pee on this if I had the energy. Chew iPad power cord steal the warm chair right after you get up for purr for no reason leave hair everywhere, decide to want nothing to do with my owner today." + "<br> <br>",
    "Bro ipsum dolor sit amet gaper backside single track, manny Bike epic clipless. Schraeder drop gondy, rail fatty slash gear jammer steeps clipless rip bowl couloir bomb hole berm. Huck cruiser crank endo, sucker hole piste ripping ACL huck greasy flow face plant pinner. Japan air Skate park big ring trucks shuttle stoked rock-ectomy." + "<br> <br>",
    "Satoshi Nakamoto launched lots of decentralisation when Litecoin required many decentralised application, for Augur limited some public key behind lots of multi signature. Blockchain thought some robust smart contract in a algorithm! Since OmiseGo bought few double spend, Augur could be many algo-traded vaporware, but Decred data mining few trusted hard fork!" + "<br> <br>",
    "Swearem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam scelerisque accumsan nisl, a mattis eros vestibulum et. Vestibulum placerat purus ut nibh aliquam fringilla. Aenean et tortor diam, id tempor elit. Vivamus sagittis ornare fuck. Nullam lacinia jizzmopper vel diam tempor et consequat ligula porttitor." + "<br> <br>",
    "That is the true genius of America - a faith in simple dreams,, an insistence on small miracles. We meet at one of those defining moments - a moment when our nation is at war, our economy is in turmoil, and the American promise has been threatened once more. We did not go by choice, we went because of necessity." + "<br> <br>"
];
let input = document.querySelector("input");
let button = document.querySelector("button");
let paragraph = document.querySelector(".para");
button.addEventListener("click",()=>{
    let noOfPara = input.value;
    if(noOfPara > 10){
        alert("Please enter value between 1-10")
    }
    else if(!parseInt(noOfPara)){
        alert("Please enter a valid number");
    }
    else{
        for(let i=0; i<=noOfPara; i++){
          let returnPara = paragraph.innerHTML = ipsumArray.slice(0,i);
          console.log(returnPara);
        }  
    }
});

