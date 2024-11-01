import { Router, Request, Response } from "express";
import { User } from "../models/user";

let users: User[] = [];

let router: Router = Router();

router.get('/get', (_: Request, response: Response) => 
{
    response.json(users);
});

router.post('/create', (request: Request, response: Response) => 
{
    let newUser : User = {username: request.body.username, password: request.body.password};

    users.push(newUser);

    response.status(201).send('Created a new user with username ' + newUser.username);

});

router.delete('/delete', (request: Request, response : Response) => 
{
    let filteredUsers: User[] = users.filter((user: User) => 
    {
        return user.username != request.body.username
    });

    users = filteredUsers;

    response.status(200).send("Deleted all users with username: " + request.body.username);
});


router.put('/update', (request: Request, response : Response) => 
{
    let usernameToUpdate: string = request.body.username;
    let newPassword: string = request.body.password;

    users = users.map((user: User) => 
    {
        if(user.username == usernameToUpdate)
        {
            return {username: user.username, password: newPassword}
        }
        else
        {
            return user;
        }
    })

    response.status(200).send("Updated password for user: " + request.body.username);
});

export default router;