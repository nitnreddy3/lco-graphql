import { nanoid } from 'nanoid'

class Course
{
    constructor ( id, { courseName, category, price, language, email, Stack, teachingAssists } )
    {
        this.id = id;
        this.courseName = courseName;
        this.category = category;
        this.price = price;
        this.language = language;
        this.email = email;
        this.Stack = Stack;
        this.teachingAssists = teachingAssists;
    }

}

const courseHolder = {}

const resolvers = {
    getCourse: ( { id } ) => { return new Course( id, courseHolder[ id ] ); },
    createCourse: ( { input } ) =>
    { 
        let id = nanoid();
        courseHolder[ id ] = input;
        return new Course( id, input );
    }
}
export default resolvers
