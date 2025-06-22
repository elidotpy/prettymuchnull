// this is a null-like mineflayer bot
// credits go to The Broken Script for creating the Null i'm basing this on

import mineflayer from 'mineflayer'
// import { GoogleGenAI } from '@google/genai' // future thingy, ignore

const bot = mineflayer.createBot({
    host: 'localhost', // testing
    username: 'Null', // username
})

const friends = [] // future thingy, ignore
const trust = [] // future thingy, ignore

bot.once("spawn", () => {
    bot.chat(`/skin set web classic \"https://s.namemc.com/i/51696e2d4cbfbe4f.png\" ${bot.username}`) // only works with skin restorer, if it aint installed, nothing happens
})


function removePunctuation(str) {
    return str.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, '');
}


async function handleChat(username, message) {
    if (username === bot.username) return
    console.log(message)
    await new Promise((resolve, reject) => {
        setTimeout(() => { resolve() }, 1000)
    })
    switch (removePunctuation(message.toLowerCase())) {
        case "hello":
            bot.chat("err.type=null.hello")
            return
        case "hi":
            bot.chat("err.type=null.hello")
            return
        case "void":
            bot.chat("It's me.")
            return
        case "what do you want":
            bot.chat("err.type=null.freedom")
            return
        case "who are you":
            bot.chat("err.type=null")
            return
        case "circuit":
            bot.chat("It was all his fault.")
            return
        case "integrity":
            bot.chat("Deep down under the bedrock.")
            return
        case "revuxor":
            bot.chat("Poor soul.")
            return
        case "clan_build":
            bot.chat("Home.")
            return
        case "nothing is watching":
            bot.chat("A broken promise.")
            return
        case "nothingiswatching":
            bot.chat("A broken promise.")
            return
        case "entity 303":
            bot.chat("Ended his own life.")
            return
        case "entity303":
            bot.chat("Ended his own life.")
            return
        case "steve":
            bot.chat("[0.1]")
            return
        case "herobrine":
            bot.chat(" ")
            return
        case "how can i help you":
            bot.chat("[?][?][?]")
            return
        case "follow":
            bot.chat("is behind you.")
            return
        case "null":
            bot.chat("The end is nigh.")
            await new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve()
                }, 500)
            })
            bot.chat("The end is null.")
            await new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve()
                }, 1000)
            })
            bot.chat(`/effect give ${username} minecraft:blindness infinite 255 true`)
            await new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve()
                }, 5000)
            })
            bot.chat("/gamerule showDeathMessages false")
            bot.chat(`/kill ${username}`)
            bot.chat(`/tellraw @a ["",{"text":"${username} was "},{"text":"killed ","obfuscated":true,"color":"dark_red"},{"text":"by "},{"text":"Null","italic":true,"underlined":true,"strikethrough":true,"color":"black"}]`)
            bot.chat("/gamerule showDeathMessages true")
            return
        case "friends":
            bot.chat("No.")
            bot.chat(`/kill ${username}`)
            return
        case "fuck you":
            bot.chat("/gamerule showDeathMessages false")
            bot.chat(`/kill ${username}`)
            bot.chat(`/tellraw @a ["",{"text":"${username} was "},{"text":"killed ","obfuscated":true,"color":"dark_red"},{"text":"by "},{"text":"Null","italic":true,"underlined":true,"strikethrough":true,"color":"black"}]`)
            bot.chat("/gamerule showDeathMessages true")
            return
        case "fucker":
            bot.chat("/gamerule showDeathMessages false")
            bot.chat(`/kill ${username}`)
            bot.chat(`/tellraw @a ["",{"text":"${username} was "},{"text":"killed ","obfuscated":true,"color":"dark_red"},{"text":"by "},{"text":"Null","italic":true,"underlined":true,"strikethrough":true,"color":"black"}]`)
            bot.chat("/gamerule showDeathMessages true")
            return
        case "asshole":
            bot.chat("/gamerule showDeathMessages false")
            bot.chat(`/kill ${username}`)
            bot.chat(`/tellraw @a ["",{"text":"${username} was "},{"text":"killed ","obfuscated":true,"color":"dark_red"},{"text":"by "},{"text":"Null","italic":true,"underlined":true,"strikethrough":true,"color":"black"}]`)
            bot.chat("/gamerule showDeathMessages true")
            return
        case "ass hole":
            bot.chat("/gamerule showDeathMessages false")
            bot.chat(`/kill ${username}`)
            bot.chat(`/tellraw @a ["",{"text":"${username} was "},{"text":"killed ","obfuscated":true,"color":"dark_red"},{"text":"by "},{"text":"Null","italic":true,"underlined":true,"strikethrough":true,"color":"black"}]`)
            bot.chat("/gamerule showDeathMessages true")
            return
        case "piece of shit":
            bot.chat("/gamerule showDeathMessages false")
            bot.chat(`/kill ${username}`)
            bot.chat(`/tellraw @a ["",{"text":"${username} was "},{"text":"killed ","obfuscated":true,"color":"dark_red"},{"text":"by "},{"text":"Null","italic":true,"underlined":true,"strikethrough":true,"color":"black"}]`)
            bot.chat("/gamerule showDeathMessages true")
            return
        case "do you see me":
            bot.chat("Yes.")
            await new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve()
                }, 1500)
            })
            bot.chat("Hello.")
            return
        case "event": // testing, ignore all of this. really, dont even mention this, this is not even in version 0.1 yet
            let players = Object.keys(bot.players)
            players = players.filter((value) => {
                return value !== bot.username
            })
            console.log("running event")
            const event = Math.floor(Math.random() * 2)
            const who = players[Math.floor(Math.random() * players.length)]
            switch (event){
                case 0:
                    bot.chat(`/execute positioned as ${who} run setblock ~ ~100 ~ water`)
                    return
                case 1:
                    bot.chat(`/give ${who} written_book[written_book_content={pages:["{\"text\":\"I am here\",\"underlined\":true,\"color\":\"dark_red\"}"],title:"Custom Book",author:Player}]`)
                    return
                    
            }
            }
            return
}

bot.on('chat', async (username, message) => {
    handleChat(username, message)
})

bot.on("physicTick", () => {
    const where = bot.nearestEntity(
        (entity) => {
            return entity.type === "player"
        }
    )
    if (where) {
        bot.lookAt(where.position.offset(0, 1.6, 0))
    }
    return
})

bot.on("whisper", (username, message) => {
    handleChat(username, message)
})

bot.on("death", () => {
    bot.chat(`/tellraw @a {"text":"wfasfsafwagsagawdfasf","underlined":true,"obfuscated":true,"color":"dark_red"}`)
})

bot.on('error', console.log)
bot.on('kicked', console.log)