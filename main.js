var motivationQuotes=["Start writing, no matter what. The water does not flow until the faucet is turned on","Get it down. Take chances. It may be bad, but it's the only way you can do anything really good",
"The first draft is just you telling yourself the story",
"You don’t start out writing good stuff. You start out writing crap and thinking it’s good stuff, and then gradually you get better at it",
"Start before you’re ready.",
"You can always edit a bad page. You can’t edit a blank page",
"You can’t wait for inspiration. You have to go after it with a club.",
 "I have never started a poem yet whose end I knew. Writing a poem is discovering.",
"If there's a book that you want to read, but it hasn't been written yet, then you must write it.",
"I'm writing a first draft and reminding myself that I'm simply shoveling sand into a box so that later I can build castles.", 
  "First, find out what your hero wants, then just follow him!",
"The greatest part of a writer’s time is spent in reading, in order to write. A man will turn over half a library to make a book.",
"Writing a novel is like driving a car at night. You can only see as far as your headlights, but you can make the whole trip that way.",
 "To produce a mighty book, you must choose a mighty theme.",
 "Tell the readers a story! Because without a story, you are merely using words to prove you can string them together in logical sentences.", 
 "Description begins in the writer’s imagination but should finish in the reader’s.",
 "No tears in the writer, no tears in the reader. No surprise in the writer, no surprise in the reader.",
 "If you want to be a writer, you must do two things above all others: read a lot and write a lot.",
 "Close the door. Write with no one looking over your shoulder. Don’t try to figure out what other people want to hear from you; figure out what you have to say. It’s the one and only thing you have to offer.",
 "Never write anything that does not give you great pleasure. Emotion is easily transferred from the writer to the reader.",
 "My own experience is that once a story has been written, one has to cross out the beginning and the end. It is there that we authors do most of our lying.",
 "The most valuable of all talents is that of never using two words when one will do ",
 "When your story is ready for rewrite, cut it to the bone. Get rid of every ounce of excess fat. This is going to hurt; revising a story down to the bare essentials is always a little like murdering children, but it must be done.",
 "It is perfectly okay to write garbage as long as you edit brilliantly",
 "Half my life is an act of revision",
 "Writing without revising is the literary equivalent of waltzing gaily out of the house in your underwear."
]
var loveQutes=[ "If I know what love is, it is because of you." ,
"I fell love with her courage, her sincerity, and her flaming self respect. And it’s these things I’d believe in, even if the whole world indulged in wild suspicions that she wasn’t all she should be. I love her and it is the beginning of everything.",
"I swear I couldn’t love you more than I do right now, and yet I know I will tomorrow." ,
"If you live to be a hundred, I want to live to be a hundred minus one day so I never have to live without you.",
"A man is already halfway in love with any woman who listens to him.",
"I love you as certain dark things are to be loved, in secret, between the shadow and the soul.",
"Women are meant to be loved, not to be understood.",
"You make me want to be a better man.",
"Thinking of you keeps me awake. Dreaming of you keeps me asleep. Being with you keeps me alive.",
"There is never a time or place for true love. It happens accidentally, in a heartbeat, in a single flashing, throbbing moment.",
"Love is that condition in which the happiness of another person is essential to your own.",
"Love never dies a natural death. It dies because we don’t know how to replenish its source. It dies of blindness and errors and betrayals. It dies of illness and wounds; it dies of weariness, of witherings, of tarnishings.",
"He is not a lover who does not love forever.",
"To love is to burn, to be on fire.",
"Love does not begin and end the way we seem to think it does. Love is a battle, love is a war; love is a growing up.",
"In the end we discover that to love and let go can be the same thing.",
"Pleasure of love lasts but a moment. Pain of love lasts a lifetime.",
"To love at all is to be vulnerable. Love anything and your heart will be wrung and possibly broken. If you want to make sure of keeping it intact you must give it to no one, not even an animal. Wrap it carefully round with hobbies and little luxuries; avoid all entanglements. Lock it up safe in the casket or coffin of your selfishness. But in that casket, safe, dark, motionless, airless, it will change. It will not be broken; it will become unbreakable, impenetrable, irredeemable. To love is to be vulnerable.",
"Love is an untamed force. When we try to control it, it destroys us. When we try to imprison it, it enslaves us. When we try to understand it, it leaves us feeling lost and confused.",
"Love is so short, forgetting is so long." 
]
function displayQuotes(motivationQuotes,loveQutes){
	var message="your quotes of today is : "
	for(var i=0;i<motivationQuotes;i++){
		message=message+motivationQuotes[i]
	}
for (var i=0;i<loveQutes;i++){
	message=message+loveQutes[i]
}
return message
}
var display = displayQuotes()