<!DOCTYPE html>
<html>
<head>
    <script>
        var Hero = function(firstName, secondName, title, homeCity) {
            this.firstName = firstName;
            this.secondName = secondName;
            this.title = title;
            this.homeCity = homeCity;
        }
 
        console.log(Hero.title);
 
        var superman = new Hero("Clark", "Kent", "Superman", "Metropolis");
        var batman = new Hero("Bruce", "Wayne", "Batman", "Gotham");
        console.log(batman.title);
        console.log(superman.title);
 
        Hero.prototype.isWearingSuit = false;
 
        console.log(superman.isWearingSuit);
 
 
        batman.isWearingSuit = true;
        console.log(batman.isWearingSuit);
    </script>
</head>
</html>