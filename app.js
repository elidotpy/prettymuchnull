// this is a null-like mineflayer bot
// credits goes to The Broken Script for creating the Null i'm basing this on

// --- IMPORTS ---
import mineflayer from 'mineflayer'
import { removePunctuation, sleep } from './utils.js'
// /-- IMPORTS --/

// --- SETTING THINGS UP ---
const bot = mineflayer.createBot({
    host: 'localhost', // testing
    username: 'Null', // username
})

const playersObject = {}
let anger = 0
// /-- SETTING THINGS UP --/

// --- HELPER FUNCTIONS / CLASSES ---
class Player {
    trust = 0
    isFriend = false
    friendship = 0
}

function kill(username) {
    bot.chat("/gamerule showDeathMessages false")
    bot.chat(`/kill ${username}`)
    bot.chat(`/tellraw @a ["",{"text":"${username} was "},{"text":"killed ","obfuscated":true,"color":"dark_red"},{"text":"by "},{"text":"Null","italic":true,"underlined":true,"strikethrough":true,"color":"black"}]`)
    bot.chat("/gamerule showDeathMessages true")
}

async function handleChat(username, message) {
    if (username === bot.username) return
    if (!playersObject[username]) {
        playersObject[username] = new Player()
    }
    await sleep(1000)
    switch (removePunctuation(message.toLowerCase())) {
        case "hello":
        case "hi":
            if (anger < 20) {
                bot.chat("err.type=null.hello")
            } else {
                bot.chat("err.type=null.bye")
                await sleep(200)
                kill(username)
            }
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
            if (!isPlayerFriend(username)) {
                bot.chat("The end is nigh.")
                await sleep(500)
                bot.chat("The end is null.")
                await sleep(1000)
                bot.chat(`/effect give ${username} minecraft:blindness infinite 255 true`)
                await sleep(5000)
                kill(username)
                return
            } else {
                bot.chat("Yes?")
                return
            }
        case "friends":
            if (!isPlayerFriend(username)) {
                if (anger > 20) {
                    bot.chat("NO!")
                    kill(username)
                    playersObject[username].trust -= 10
                } else if (getPlayerTrust(username) > 20) {
                    console.log(getPlayerTrust(username))
                    bot.chat("Yes.")
                    playersObject[username].isFriend = true
                } else {
                    bot.chat("No.")
                }
            } else {
                console.log("A friend.")
                bot.chat("Yes.")
            }
            return
        case "fuck you":
        case "fucker":
        case "asshole":
        case "ass hole":
        case "piece of shit":
            kill(username)
            return
        case "do you see me":
            bot.chat("Yes.")
            await sleep(1500)
            bot.chat("Hello.")
            return
        case "calm down null":
            if (!isPlayerFriend(username)) {
                if (getPlayerTrust(username) < 30) { // not friend, not trusted, therefore, Normal
                    if (anger < 30) { // not friend, not trusted, null is not mad
                        if (Math.random() < 0.1) {
                            anger -= 5
                            bot.chat("...")
                        } else {
                            anger += 5
                            bot.chat("No.")
                        }
                    } else { // not friend, not trusted, null is mad
                        bot.chat("NO!")
                        anger += 10
                        kill(username)
                    }
                    return
                } else if (getPlayerTrust(username) >= 30) { // not friend, trusted
                    if (Math.random() < 4 / 9) {
                        anger -= 2.5
                        bot.chat("...")
                    } else {
                        anger += 3
                        bot.chat("No.")
                    }
                    return
                }
            } else { // friend
                if (Math.random() < 3 / 7) {
                    anger -= 2.5
                    bot.chat("...")
                } else {
                    anger += 3
                    bot.chat("No.")
                }
            }
        case "test":
            playersObject[username].trust += 10
            return
        case "event":
            let players = Object.keys(bot.players).filter((value) => {
                return value !== bot.username
            })

            console.log("running event")
            const event = Math.floor(Math.random() * 3) // because theres only one event still
            const who = players[Math.floor(Math.random() * players.length)]
            switch (event) {
                case 0: // bath
                    bot.chat(`/execute positioned as ${who} run setblock ~ ~100 ~ water`)
                    return
                case 1: // rp-tp
                    bot.chat(`/tp ${who}`)
                    return
                case 2: // little scare
                    bot.chat(`/title ${who} actionbar "You feel like you're being watched."`)
                    return
        }
        case "what do you think of eliza":
            const lol = [
                "A failure.",
                "A broken script.",
                "Irrelevant.",
                "Forgetful.",
                "No \"ELIZA\". Just Null.",
                "list of good things: null"
            ]
            bot.chat(lol[
                Math.floor(
                    Math.random() * lol.length
                )
            ])
    }
}

function isPlayerFriend(username) {
    return playersObject[username].isFriend
}

function getPlayerTrust(username) {
    return playersObject[username].trust
}

function getPlayerFriendship(username) {
    return playersObject[username].friendship
}


async function handleAction(username, message) {
    switch (removePunctuation(message)) {
        case "hug":
            if (isPlayerFriend(username)) {
                console.log(bot.players[username].entity.position.distanceTo(bot.entity.position))
                if (bot.players[username].entity.position.distanceTo(bot.entity.position) < 1) { // right next
                    bot.chat("...")
                    playersObject[username].friendship += 2
                }
            } else {
                bot.chat("Don't touch me.")
                playersObject[username].trust -= 10
                kill(username)
            }
    }
}
// /-- HELPER FUNCTIONS  --/

// --- LISTENERS --- (?)
bot.once("spawn", () => {
    bot.chat(`/skin set web classic \"https://s.namemc.com/i/51696e2d4cbfbe4f.png\" ${bot.username}`) // only works with skin restorer, if it aint installed, nothing happens
})

bot.on('chat', async (username, message) => {
    console.log(message[0])
    if (!message.startsWith("!")) {
        handleChat(username, message)
    }
    else {
        handleAction(username, message)
    }
})

bot.on("physicTick", () => {
    const nearestPlayer = bot.nearestEntity(
        (entity) => {
            return entity.type === "player"
        }
    )
    if (nearestPlayer) {
        bot.lookAt(nearestPlayer.position.offset(0, 1.6, 0))
    }
    return
})

bot.on("whisper", (username, message) => {
    handleChat(username, message)
})

bot.on("death", () => {
    bot.chat(`/tellraw @a {"text":"wfasfsafwagsagawdfasf","underlined":true,"obfuscated":true,"color":"dark_red"}`)
    console.log(anger)
    anger += 10
})

bot.on('error', console.log)
bot.on('kicked', console.log)
// /-- LISTENERS --/