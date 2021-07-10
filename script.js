const searchInput = document.getElementById('search');
const results = document.getElementById('results');

let searchTerm = '';


var Workouts = [];
var first = {

    name: "Bicepts workout",
    anatomy: "The biceps is a large muscle situated on the front of the upper arm between the shoulder and the elbow. Also known by the Latin name biceps brachii, the muscle's primary function is to flex the elbow and rotate the forearm. The heads of the muscle arise from the scapula and combine in the middle arm to form a muscle mass.The other end attaches to the radius,the outermost of the two bones that make up the forearm.",
    function: "Despite what some think, the biceps is not the most powerful flexor of the forearm. Although the biceps is the most prominent muscle of the upper arm, it serves to support and stabilize the deeper brachialis muscle whenever lifting or lowering the forearm,The main functions of the biceps are the flexion and supination of the forearm.This is facilitated, in part,by the 90 degree rotation of the muscle as it connects to the radius.",
    Exercise1: "Exercise 1: Incline Dumbbell Hammer Curl  :  You rated these curls number 1! The incline bench position increases the stretch on the long head of the biceps muscle and also locks your body against the bench so you can't cheat more weight during reps by rocking backward. An added benefit to hammers is that your wrist and elbow are less vulnerable to strain than during reps of other curls.",
    Exercise2: "Exercise 2: Incline Inner-Biceps Curl : This exercise also stretches the long head of the biceps. The more horizontal the bench during your workout, the more the long head of the muscle will be stretched during reps.These are awesome to add into your isolation workout because they truly isolate the biceps muscle!",
    Exercise3: "Exercise 3: Standing Concentration Dumbbell Curl :  Concentration curls place the arm in front of the body with a bent elbow and a rotation in the shoulder. While this decreases recruitment of the long head, it potentially increases biceps thickness and peak by better recruitment of surrounding muscles during your workout. With your free hand on your off leg to support your body weight,when you hit failure you can switch over to a hammer grip and burn out a few extra reps.",
    Exercise4: "Exercise 4: EZ-Bar Curl :  A lot of people think the EZ-bar curl is the best all-around addition to your biceps workout. It engages both the short and long heads of the biceps muscle and for some people it's a lot more comfortable on the joints and forearms than a straight barbell!"
}

Workouts.push(first);
var second = {
    name: "Triceps workout",
    anatomy: "The triceps, also triceps brachii three - headed muscle of the arm,is a large muscle on the back of the upper limb of many vertebrates.It consists of 3 parts: the medial,lateral,and long head.It is the muscle principally responsiblefor extension of the elbow joint(straightening of the arm).",
    Exercise1: "Exercise 1 : Diamond Push-Ups :  The diamond push-up is probably the hardest triceps exercise in this list. It requires tremendous upper body strength, so you may need to try this move on your knees and slowly work your way up to the toes.",
    Exercise2: "Exercise 2 : Kickbacks :  The triceps kickback is the second most effective triceps exercise and not far behind diamond push-ups, coming in at about 88% of muscle activation, according to the ACE study.y bending forward, you really have to work against gravity to move the weight up and down. The key to this move is to use your shoulder to stabilize the upper arm, allowing the forearm to extend behind you. If you feel your elbow drifting down, use a lighter weight to maintain good form.",
    Exercise3: "Exercise 3 : Dips :  Triceps dips are the third most effective exercise and a tough one depending on how you position your feet. In this version, the knees are bent, making the exercise easier. Extending your feet out will increase the intensity of the exercise.The key to keeping this move safe is to keep your hips close to the chair or bench to avoid straining the shoulders. Make sure you keep the shoulders down and away from the ears and, if you feel any discomfort in the shoulders, skip this exercise.",
    Exercise4: "Exercise 4 : Overhead Triceps Extension  :  The overhead triceps extension is the fourth most effective triceps exercise, coming in at about 76% of muscle activation.1 The key to this exercise is to keep the arms next to the ears as you lower the weight behind you. Make sure you can contract the abs to keep your back from arching.You can do this exercise seated, as shown, or standing. Believe it or not, this move actually feels harder when you're sitting, and sitting on an exercise ball adds an element of core strength."
}
Workouts.push(second);
var third = {
    name: "Chest workout",
    anatomy: "Chest Muscles Anatomy. The chest is made up primarily of two muscles: the pectoralis major, and  the pectoralis minor. Chest Muscles Anatomy  Pectoralis Major Muscle. The pectoralis major is the large superficial chest muscle that pops when you wear a tight T-shirt. It spreads out like a fan and covers the rib cage like an armor plate.",
    Exercise1: "Exercise 1 : Dumbbell Squeeze Press :   Squeezing the dumbbells together during a chest press moves the emphasis of the movement onto your pecs. This simple tweak engages them throughout the entire range of motion — a key factor to maximise muscle gain.Lie on a flat bench and hold a dumbbell in each hand. Maintain a neutral grip and begin with your arms straight, directly above you. Bend your arms and lower them to the side of your body so the dumbbells lie just above your chest. Pause and then lift your arms to repeat.",
    Exercise2: "Exercise 2 : Incline barbell bench press :  Pressing on an incline set-up works the clavicular head, which is why the incline barbell bench press makes your pecs pop.Lie back on a bench set to an incline angle and lift a barbell to shoulder height, palms facing away from you. Breathe out as you press up with both arms. Lock out your arms and squeeze your chest before returning slowly to the start position.",
    Exercise3: "Exercise 3 :Incline dumbbell bench press  :  While the bench press is the chest-bulking staple, dumbbell presses offer different variants to help you build a bigger chest. By using two separate weights, you have a greater range of motion, while activating more stabilising muscles too.Lie back on a bench set to a 45-degree angle and lift the weights over your chest, palms facing away from you. Slowly lower one weight, then drive it back up and squeeze your chest at the top.Repeat with the other side.",
    Exercise4: "Exercise 4 : Close-grip barbell bench press:  The close-grip bench press places less strain on your shoulders, shifting the emphasis to your triceps and chest. Place your hands just inside of shoulder width.Lie back on a flat bench holding a barbell with a narrow, overhand grip. From the starting position, breathe in and lower the bar slowly until it skims the middle of your chest. Push the bar back to the starting position explosively as you breathe out. Focus on pushing the bar using your chest muscles."
}
Workouts.push(third)

var fourth = {
    name: "Back workout",
    anatomy: "The superficial back muscles are situated underneath the skin and superficial fascia. They originate from the vertebral column and attach to the bones of the shoulder – the clavicle, scapula and humerus. All these muscles are therefore associated with movements of the upper limb. The muscles in this group are the trapezius, latissimus dorsi, levator scapulae and the rhomboids.",
    Exercise1: "Exercise 1 : Deadlift : This mighty pull is far more than a back exercise. It hits the entire posterior chain, from your calves to your upper traps, but it's also a time-tested standout for overall backside development.And no, it's not just for powerlifters! Legendary bodybuilder Jay Cutler builds his back day around deadlifts, as well. Technique is uber-important, but once you nail it, you can progress to lifting monster weights that recruit maximum muscle, release muscle-building hormones, and help you get big.",
    Exercise2: "Exercise 2 : Bent-Over Row : This is a total back-builder: upper back, lower back, lats, traps, spinal erectors—the whole deal. And the science backs it up. It's a staple of the best back workouts for men, but make no mistake, it's great for back workouts for women, as well.Do heavy bent-over rows toward the start of your back workout in lower rep ranges, such as 6-8 or 8-10, in order to save your lower back. If you're wrecked from deadlifts, skip it or do it on a second back day later in the week.",
    Exercise3: "Exercise 3 :Pull-Up : It's always a good idea to have an overhead pulling movement in your back routine, and the pull-up is one of the best. Each variation has its own advantages: Wide-grip variations are great for the upper lats, while close-grip chins or neutral-grip pull-ups have a greater stretch and overall range of motion. Mix it up!.If you're a pull-up pro, you can do some light sets as a warm-up. If they're tougher for you, you can treat them more as a strength movement toward the start of your workout. Assisted variations make for great burnouts at the end of a back workout.",
    Exercise4: "Exercise 4 : T-Bar Row :  The T-bar row may seem at first glance like another variation of the bent-over row, but serious lifters know there's a big difference. For one, you can pile on more weight!You also typically have a choice of hand positions and width. A wider grip will put more emphasis on the lats, while a neutral grip will better target the middle back."
}
Workouts.push(fourth)

var fifth = {
    name: "Shoulders workout",
    anatomy: "The shoulder has about eight muscles that attach to the scapula, humerus, and clavicle. These muscles form the outer shape of the shoulder and underarm. The muscles in the shoulder aid in a wide range of movement and help protect and maintain the main shoulder joint, known as the glenohumeral joint.",
    Exercise1: "Exercise 1 : Barbell Overhead Shoulder Press :  A barbell overhead shoulder press (aka barbell standing shoulder press) works not just your shoulders, but most of your body. That makes it a terrific core strengthener and mass builder, among other things. To start,Put your feet at shoulder-width, and tighten your core as you hold a barbell at your shoulders, palms facing forward.Next, push the bar upward and squeeze your shoulder blades together at the peak.Lower steadily and carefully.",
    Exercise2: "Exercise 2 : Seated Dumbbell Shoulder Press :  A proper deltoid workout simply isn’t complete without the seated dumbbell shoulder press. In fact, some say these should workouts with dumbells are an entire deltoid regimen unto itself, targeting the anterior, lateral, and posterior deltoid muscles . Meanwhile, lifting two separate dumbbells  prevents you from using one side of your body over the other, thereby retaining firmer balance and distribution. Naturally, a fair amount of coordination is required to pull this one off, especially when you increase the weights.",
    Exercise3: "Exercise 3 : Front Raise :  You can use either a weight plate or barbell for this shoulder exercise, which targets the anterior delts. No matter what you decide to use, prepare for a seriously intense time with one of the best shoulder exercises for mass. Don’t max out on the weight, as it will quickly turn healthy pain into unhealthy injury.",
    Exercise4: "Exercise 4 : Reverse Pec Deck Fly :  This shoulder exercise targets your posterior delts and requires a pec deck machine. It’s also the perfect chest, back and shoulder combo for building mass. To start;Face the machine, and position the seat so that the handles are at shoulder level on either side.Next, hold the handles with your palms facing inward.Tighten your torso and extend your arms out to the side, pushing through all the way.Responsibly return to the starting position.and repeat."

}
Workouts.push(fifth)

var sixth = {
    name: "Legs workout",
    anatomy: "The majority of muscles in the leg are considered long muscles, in that they stretch great distances. As these muscles contract and relax, they move skeletal bones to create movement of the body. Smaller muscles help the larger muscles, stabilize joints, help rotate joints, and facilitate other fine-tuned movements.The largest muscle masses in the leg are present in the thigh and the calf.The muscles that make up the quadriceps are the strongest and leanest of all muscles in the body. These four muscles at the front of the thigh are the major extensors (help to extend the leg straight) of the knee.They are:Vastus lateralis: On the outside of the thigh, this is the largest of the quadriceps. It extends from the top of the femur to the kneecap, or patella.Vastus medialis: This teardrop-shaped muscle of the inner thigh attaches along the femur and down to the inner border of the kneecap.Vastus intermedius: Between the vastus medialis and the vastus lateralis at the front of the femur, it is the deepest of the quadriceps muscles.Rectus femoris: This muscle attaches to the kneecap. Of the quadriceps muscles, it has the least affect on flexion of the knee.",
    Exercise1: "Exercise 1 : Front Squat : Powerlifters need to back squat because they’re required to in competition. That said, everyone else may want to consider ditching this squat variation for its front-loaded brother, the front squat. One benefit of front-squatting is that the lifter is forced to use lighter weight since a person isn’t as strong in the front-rack position. Because of this, the exercise is inherently safer for the spine. You can’t cheat it easily, either. If you can’t support the weight in front of you, then you simply can’t and you’ll be forced to dump it. With back-squatting it’s more common to see lifters quarter-repping weight that’s far beyond their ability. Lastly, the front squat requires more thoracic stability and forces the lifter in an upright position, which is better for core recruitment and posture",
    Exercise2: "Exercise 2 :Bulgarian Split Squat :  Elevating your leg on a bench creates instability and increases the exercise’s range of motion. The Bulgarian split squat’s instability forces you to balance, which recruits smaller stabilizing muscles in your hips and quads. Squatting with a more extended range of motion increases the muscle’s stretch — enhancing your mobility and the muscle-building tension placed on the glutes, hamstrings, and quads.",
    Exercise3: "Exercise 3 : Leg Press :  The leg press doesn’t have you load your torso with weight and your back braces against a pad, which gives you more driving force. As a result, you can load this exercise up with more weight relative to most leg exercises. This factor makes the leg press a great accessory to getting bigger and stronger thighs. It’s also safer as you can rack the sled simply but turning the handles in and out. As a bonus, you can more quickly load and unload the leg press, making it useful for drop sets. You can perform a high-rep set, strip the plates, do another set, strip the plates, and so forth.",
    Exercise4: "Exercise 4 :Romanian Deadlift :  This deadlift variation is nearly identical to the standard deadlift, except that you lower the weight to mid-shin level. Therefore, you use less weight and lift with greater control. The Romanian deadlift helps you build muscle, improve your regular deadlift, and strengthens your hips and lower back — which results in a lesser chance of injury performing similar movements.  "
}
Workouts.push(sixth)

var seventh = {
    name: "Cardio workout",
    anatomy: "People tend to think of cardio in terms of steady state exercise, like jogging,” says Trevor Thieme, C.S.C.S. and Openfit’s senior manager of fitness and nutrition content. “But really, cardio is anything that A) raises your heart and breathing rates, and B) improves the function of your heart, lungs, and circulatory system.Not quite. Just about any physical activity you do can increase your heart rate, from lifting weights to strolling between your desk and the bathroom to rolling out of bed in the morning. For an activity to qualify as a cardio workout, it has to meet both criteria mentioned above.",
    Exercise1: "Exercise 1 : Jump Rope : Chances are, you haven’t jumped rope since 4th grade recess. If that’s the case, go get yourself a jump rope today! This form of cardio can be done just about anywhere. Turn up your favorite playlist and jump to the beat. Tossing your jump rope in a backpack, suitcase, or purse will help you squeeze in your 150 minutes of exercise per week whenever you have some spare time.",
    Exercise2: "Exercise 2 :  Cycling :  There are plenty of ways to fit this type of cardio into your day.Swap your car for a bike on your next trip to the grocery store.Switch it up and ditch the treadmill for the stationary bike on your next trip to the gym.Bite the bullet and try that indoor cycling studio you’ ve been eyeing for the past six months,or buy a trainer so you can ride your road bike in your house or garage.",
    Exercise3: "Exercise 3 :  Jumping Jacks :  If you haven’t done these since high school gym class, you’re missing out! This equipment-free activity can get your heart rate up in no time. Plus, they’re easy to do from anywhere. Start jumping first thing in the morning, when you need a break from your desk, or while you’re waiting for your dinner to finish cooking.",
    Exercise4: "Exercise 4 :Walking : You may be wondering if walking counts as cardiovascular exercise. Of course! This is a great starting place for people who are new to exercise. Even a 10-minute walk can get you on the road to improved heart health. Experienced exercisers benefit from it, too."
}
Workouts.push(seventh)

var eighth = {
    name: "The abdominal muscles workout",
    anatomy: "The muscles of the abdomen are made up of the muscles of the anterolateral abdominal wall and the muscles of the posterior abdominal wall. These muscles work together to protect the internal organs (viscera) by covering them completely. They also help to provide postural support, assist in forceful expiration and increase the intra-abdominal pressure in activities such as sneezing, coughing, lifting, urinating, defecating and childbirth.",
    Exercise1: "Exercise 1 : Abdominal crunch : Lie on your back and place your feet on a wall so that your knees and hips are bent at 90-degree angles. Tighten your abdominal muscles.Raise your head and shoulders off the floor. To avoid straining your neck, cross your arms on your chest rather than locking them behind your head. Hold for three deep breaths.Return to the start position and repeat.",
    Exercise2: "Exercise 2 :  Bridge : Lie on your back with your knees bent (A). Keep your back in a neutral position, not arched and not pressed into the floor. Avoid tilting your hips. Tighten your abdominal muscles.Raise your hips off the floor until your hips are aligned with your knees and shoulders (B). Hold for three deep breaths.Return to the start position and repeat.",
    Exercise3: "Exercise 3 :  Segmental rotation :  Segmental rotation is another way to boost core strength:Lie on your back with your knees bent and your back in a neutral position. Tighten your abdominal muscles.Keeping your shoulders on the floor, let your knees fall slowly to the left (A). Go only as far as is comfortable. You should feel a stretch, but not pain. Hold for three deep breaths.Return to the start position. Repeat the exercise to the right (B).",
    Exercise4: "Exercise 4 : Side plank: The side plank challenges your stability and improves core strength by working the muscles along the side of your body:Lie on your left side, raising yourself onto your left forearm (A). Place your left shoulder directly above your left elbow, keeping your shoulders, hips and knees in alignment. Rest your right arm along the side of your body.Tighten your abdominal muscles. Hold for three deep breaths. Repeat on your right side.For added challenge, balance on your left hand. Raise your hips off the floor and extend your right hand toward the ceiling (B). Hold for three deep breaths. Repeat on your right side."
}
Workouts.push(eighth)



localStorage.setItem('Workouts', JSON.stringify(Workouts));



async function fetchworkouts() {

    Workouts = JSON.parse(localStorage.getItem('Workouts'));

};




async function showworkouts() {

    await fetchworkouts();

    console.log(Workouts)

    results.innerHTML = (



        Workouts.filter(workout => workout.name.toLowerCase().includes(searchTerm.toLowerCase()))
        .map(workout => (

            ` 
          <li class="book-item">

            <h3 class="book-name">${workout.name}</h3>
            
          </li>
        `
        ))
    );
    console.log(results);
};

showworkouts();

function getelement(e) {
    console.log(e.target);
    localStorage.setItem('choosen workout', e.target.innerText)



}


// function addbooks() {
//     var newbook = {}
//     newbook.name = document.getElementById("bookname").value
//     newbook.ecrivain = document.getElementById("writer").value
//     newbook.résumé = document.getElementById("resumé").value
//     Books.push(newbook)
//     localStorage.setItem("Books", JSON.stringify(newbook))
//     if (newbook.name === '' || newbook.ecrivain === '' || newbook.résumé === '') {
//         alert("you must fill all fields ")
//     } else
//         alert("your book has been added succefully")
//     console.log(Books)
//     console.log(newbook)
// }

// INPUT SETUP




searchInput.addEventListener('input', function(event) {
    searchTerm = event.target.value;
    showworkouts();
});