const User = require('./models/UserSchema')

const resolver = {
    Query: {
        hello: () => {
            return "Hello World!"
        },

        getAllUsers: async () => {
            return await User.find()
        }
    },

    Mutation: {
        createUser: async (parent, args, context,info) => {
            const {name,password,userReach} = args.user
            const user = new User({name, password,userReach})
            console.log(name,password,userReach)
            await user.save()
            return user
        }
    }
}

module.exports = resolver