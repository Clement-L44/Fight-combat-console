class Personnage{

    constructor (pseudo, classe, sante, attaque, niveau) {
        this.pseudo = pseudo;
        this.classe = classe;
        this.sante = sante;
        this.attaque = attaque;
        this.niveau = niveau;
    }

    evoluer(pseudo, niveau){
        niveau = this.niveau + 1;
        console.log(pseudo + " passe au niveau " + niveau);
        return this.niveau = niveau;
    }

    verifSante(pseduo, sante){

        if(this.sante <= 0){
            sante = this.sante = 0;
            console.log(this.pseudo + " a perdu !");
            return this.sante = sante;
        }

    }
    
    get informations (){

        return console.log(this.pseudo + " " + this.classe + " a " + this.sante + " points de vie et est au niveau " + this.niveau + ".");

    }

}

class Magicien extends Personnage{

    constructor (pseudo, classe, sante, attaque, niveau ){
        super(pseudo, classe = "Magicien", sante = 170, attaque = 90, niveau = 1);
    
    }

    attaquer(Personnage){

            Personnage.sante = Personnage.sante -= this.attaque;
            console.log(this.pseudo + " attaque " + Personnage.pseudo + " en lançant un sort (" + this.attaque + " dégâts).");
            this.evoluer(this.pseudo, this.niveau);
            Personnage.verifSante(this.pseudo, this.sante);
            
        
    }

    coupSpecial(Personnage){

        Personnage.sante = Personnage.sante -= (this.attaque * 5);
        console.log(this.pseudo + " attaque avec son coup spécial puissance des arcanes " + Personnage.pseudo + "( " + this.attaque*5 + " dégâts )");
        this.evoluer(this.pseudo, this.niveau);
        Personnage.verifSante(this.pseudo, this.sante);

    }

}

class Guerrier extends Personnage{

    constructor (pseudo, classe, sante, attaque, niveau){
        super(pseudo, niveau = "Guerrier", sante = 350 , attaque = 50, niveau=1);
    }

    attaquer(Personnage){

        Personnage.sante = Personnage.sante -= this.attaque;
        console.log(this.pseudo + " attaque " + Personnage.pseudo + " avec son épée (" + this.attaque + " dégâts).");
        this.evoluer(this.pseudo, this.niveau);
        Personnage.verifSante(this.pseudo, this.sante);
        
    
    }

    coupSpecial(Personnage){

        Personnage.sante = Personnage.sante -= (this.attaque * 5);
        console.log(this.pseudo + " attaque avec son coup spécial haches de guerre " + Personnage.pseudo + "( " + this.attaque*5 + " dégâts )");
        this.evoluer(this.pseudo, this.niveau);
        Personnage.verifSante(this.pseudo, this.sante);
    }

    
}

var gandalf = new Magicien('Gandalf');
var thor = new Guerrier('Thor');
console.log(thor.informations);
console.log(gandalf.informations);
gandalf.attaquer(thor);
console.log(thor.informations);
thor.attaquer(gandalf);
console.log(gandalf.informations);
gandalf.coupSpecial(thor);

