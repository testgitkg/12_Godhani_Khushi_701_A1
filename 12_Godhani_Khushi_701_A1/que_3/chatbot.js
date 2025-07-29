module.exports.ChatbotReply = function(message) {
    this.Bot_Age = 22;
    this.Bot_Name = "name";
    this.Bot_University = "VNSGU";
    this.Bot_Country = "India";

    message = message.toLowerCase();

    if (message.includes("hi") || 
        message.includes("hello") || 
        message.includes("welcome")) {
        return "Hi!";
    } 
    else if (message.includes("age") && message.includes("your")) {
        return "I'm " + this.Bot_Age + " years old.";
    } 
    else if (message.includes("how") && message.includes("are") && message.includes("you")) {
        return "I'm fine😊";
    } 
    else if (message.includes("where") && message.includes("live") && message.includes("you")) {
        return "I live in " + this.Bot_Country;
    }

    return "Sorry, I didn't get it :( ";
};