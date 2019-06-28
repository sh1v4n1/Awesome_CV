
	const things = ['code','build website','flutter','fluttering','web-app','design','plan','develop','hack','pentesting','building','creating','working','smartness','programming','programmer','professional','student','programming','concluding','programming','thinking','scripting','scripting','scripting','scripting','scripting','sewing','ruminating','deliberating','pondering','contemplating','debugging','abstracting','abstracting','abstracting','abstracting','abstracting','optimising','optimising','optimising','optimising','optimising','optimising','refactoring','refactoring','refactoring','objectifying','simplifying','decoupling','debugging','debugging','debugging','debugging','debugging','debugging','configuring','streamlining','searching','tweaking','editing','pentesting','pentesting','pentesting','pentesting','pentesting'];
	const junk = ['#','@','%','*','&amp;','&lt;','&gt;','_','=','+','[',']','|','-','!','?','X','0'];
	const weirdfacts=['It is physically impossible for you to lick your elbow.', 'It takes approximately 12 hours for food to entirely digest.', "I don't believe in certain foods belonging to certain meals", 'Food is food', 'However, I do believe in eating dessert first', 'A "jiffy" is an actual unit of time: 1/100th of a second.', "I can't see, hear, or even think about yawning without having to do so myself", 'I have to wipe my eyes every time I come out of the water when I swim', 'I have never finished an eraser', 'I always lose it before it ends', "If I put something in a clean kitchen sink and immediately realize I am not done with it, I feel like it is covered in germs and must be washed first!I hate when someone is erasing a chalkboard and they don't erase the whole thing, leaving behind the remnants of a few letters", 'I look for positivity in all things.', 'The more I think about getting asleep, the harder it gets to be asleep', 'I am a tough person who has made it through tough times.', 'Whenever I sneeze and someone says, "God bless you!", I get really nervous to sneeze again and try to hold it, because I don\'t want them to have to bless me twice', 'No doors can be ajar', 'They have to be completely open or closed', 'I am making a difference', "Every time I walk by a window or mirror I always have to check myself out to make sure I don't look stupid, but I always act like I am looking around and just happen to see myself so as not to look vain", 'The cigarette lighter was invented before the match.'];
	function randomInt(min, max)
	{
		return Math.round(min + (Math.random() * (max-min)));
	}

	function tick()
	{
		var txt = things[randomInt(0, things.length-1)];
		var chars = txt.split('');
		var glitch = randomInt(0, 3);
		for (var i = 0; i < glitch; i++)
		{
			chars[randomInt(0, chars.length-1)] = junk[randomInt(0, junk.length-1)];
		}
		txt = chars.join('');
		$('#ing').html(txt);
		window.setTimeout(tick, randomInt(16,400));
	}
	function randomWeirdFacts(){
			var txt = weirdfacts[randomInt(0, weirdfacts.length-1)];
			$('#weirdfacts').html(`"${txt}"`);
			window.setTimeout(randomWeirdFacts,3000);
	}

	if(document.getElementById('ing') != null) tick();
if (document.getElementById('weirdfacts')!=null) randomWeirdFacts();



if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register("../sw.js")
    .then(function() {
      console.log("Service worker Registered");
    });
}
