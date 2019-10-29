export class Movie {
    /**Typescript is strongly typed (unlike JavaScript). This is how we declare variables in Typescript:
     * 
     * NOTE: We have access to the same data types in Typescript as we do in JavaScript.
     * 
     * We should also note that there are only 2 access modifiers in TypeScript: public or private. The default modifier is public.
     */
    id:number;
    title:string;
    someFunction:Function;
    someObject:Object;
    somethingNull:null;
    somethingUndefined:undefined;
    trueOrFalseOrTalse:boolean;

    /**We can define functions in Typescript as well: 
     * 
     * NOTE: We can specify what a function should return. If we do not, our function can return anything.
    */

    getId():number{
        return this.id; //note that the semicolon is optional
    }   
}