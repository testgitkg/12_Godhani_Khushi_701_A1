const readline = require("readline");
const chatbotModule = require("./chatbot");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Hello! I'm ChatBot. Type 'bye' to exit.");

function ask() {
    rl.question("You: ", (input) => {
        if (input.toLowerCase().includes("bye")) {
            console.log("Bot: Bye! Have a great day!");
            rl.close();
        } else {
            const reply = chatbotModule.ChatbotReply(input);
            console.log("Bot:", reply);
            ask();
        }
    });
}

ask();