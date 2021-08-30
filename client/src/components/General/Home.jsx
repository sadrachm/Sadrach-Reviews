function Home() {
    return <>
        <h1 className="title">Hola</h1>
        <p className="mx-auto" style= {{width:"70%"}}>Welcome to my React Project. This web page will be a practice project 
        expositioning some of my knowledge in the React framework. This does not mean
        that I will not actually put reviews and opinions on games and shows that I place here. 
        I hope to one day fully develop this website with db management and post it online.
        I will be talking about video games, some shows, movies, and maybe some books. I will be 
        focusing more on making the website look nice and making it as dynamic as possible to cut off 
        any redundancies which will in turn make me a better programmer. I started working on this on 
        August 15. I hope to have db management, dynamic webpages, and good fonts (lol) by the end of
        the year. If you read this after 2021 then it is very likely that you are in some extremely 
        outdated version of my website. I actually have no idea how you got here. Unless I put this part 
        online and forgot to erase it. If that's the case then ... ummm ... sorry? Okay, well, 
        see you around, I guess. Viva La Vida!</p>        

        <p className="mx-auto" style= {{width:"55%", marginTop:"60px", textAlign:"center"}}>Here are some things that I like since its kinda weird to leave it like that.
        Now you know a little more about me. I put these images in no particular order, although I will 
        say that this is my nindo, my ninja way. If you understand this then I love you. Goodbye</p>
   
        <div className = "box home">
            <div className="mx-auto">
                <img alt="Naruto" className="mb-4 " src="https://store-images.s-microsoft.com/image/apps.54044.14530245757884134.cbdcfbcd-3d3e-4a05-ace0-1ed4f8c27bde.2bda3d27-564f-4de5-b4d9-6bc30737e9c9?mode=scale&q=90&h=300&w=300" />
                <p className="mx-auto" style={{width:"300px"}}>Naruto taught me to never give up. 
                I must always keep trying and persevere through whichever tribulations. I was confused as to why
                Naruto was so obsessed with Sasuke but as I matured I realized that there are some relationships 
                that go beyond logic. There are some bonds that are stronger than chains. When you find someone 
                that you truly care for you see beyond what the face that they put on and Naruto showed me how this 
                looks like. It may sound cheesy but if more people believed this then maybe there wouldn't be so much 
                hate in this world. Maybe more people would take the time to get to know one another and possibly form 
                strong relationships with unexpected people. </p>
            </div>
            <div className="mx-auto">
                <img alt="Sword Art Online"className="mb-4 mx-auto" src="https://i.pinimg.com/474x/cb/2e/bd/cb2ebda63d031d7b0a3f2bb839b447a6.jpg" />
                <p className="mx-auto" style={{width:"300px"}}>Sword Art Online was one of the most impactful anime I 
                ever watched. This anime got me into software engineering. My mind was flabergasted by the possibilities
                if we were able to have the VR tech that was used in this show. The worlds that we could create would be 
                amazing. People of all ages would be able to enjoy gaming. The show introduced me to the concept of 
                Artificial Intelligence which was the push I needed to decide I want to be a programmer. Although I am not 
                specializing in AI, I do hope to get into it as a hobby or do it full time if I truly enjoy it. </p>
            </div>
            <div className="mx-auto">
                <img alt="Spider-Man" className="mb-4 mx-auto" src="https://memegenerator.net/img/images/300x300/16165513.jpg" />
                <p className="mx-auto" style={{width:"300px"}}>Spiderman has a very special place in my soul. He was my favorite 
                hero growing up and to this day. I always idolized the concept of "With great power come great responsibilities." Saying
                those words gets me riled up. Especially seeing what is happening today of how certain people use their power for the 
                wrong reasons. At first I thought the saying was just cool but as I grew up, I realized how important it is in today's 
                society. My favorite movie was Spiderman 3 even though a lot of people did not like it because it was a little cringey. 
                However, I think the message was great. Even Spiderman is corruptible when show power. Power is a very enticing poison that
                could be used for good or for evil. To not make this long I'm going to leave it at that. Sorry. LOL. Maybe I'll make a review 
                on Spiderman 3 and go more in depth. </p>
            </div>
        </div>
 </>
}

export default Home;