const pageDiv = document.getElementById("page")
let wrongTimes = 0;
let correctTimes = 0;
function start(o) {
    if (o == 1) {
        pageDiv.innerHTML = `
        <h2>السؤال 1 <span style="color: green;">(سهل)</span></h2>
        <h1>أي شركة قامت بصنع لعبة<br> grand theft auto</h1>
        <button onclick="wrong(1)">epic games</button> 
    <button onclick="right(1)">Rockstar games</button> 
    <button onclick="wrong(1)">Ubisoft</button>
        `
    } else if (o == 2) {
        pageDiv.innerHTML = `
        <h2>السؤال 2 <span style="color: green;">(سهل)</span></h2>
        <h1>اي شركة تملك بليستيشن</h1>
        <button onclick="right(2)">Sony</button> 
    <button onclick="wrong(2)">Microsoft</button> 
    <button onclick="wrong(2)">Ps</button>
        `
    }  else if (o == 3) {
        pageDiv.innerHTML = `
        <h2>السؤال 3 <span style="color: green;">(سهل)</span></h2>
        <h1>هل فورتنايت مجانية؟</h1>
        <button onclick="right(3)">نعم انها مجانية</button> 
    <button onclick="wrong(3)">كلا انها ليست مجانية</button> 
        `
    } else if (o == 4) {
        pageDiv.innerHTML = `
        <h2>السؤال 4 <span style="color: green;">(سهل)</span></h2>
        <h1>مامعنى GOTY ?</h1>
        <button onclick="wrong(4)">لعبة الشهر</button> 
    <button onclick="wrong(4)">لعبة الصغار</button> 
    <button onclick="right(4)">لعبة السنة</button>
        `
    } else if (o == 5) {
        pageDiv.innerHTML = `
        <h2>السؤال 5 <span style="color: green;">(سهل)</span></h2>
        <h1>في اي سنة صدرت لعبة <br> grand theft auto vi (6)</h1>
        <button onclick="wrong(5)">2013</button> 
    <button onclick="wrong(5)">2020</button> 
    <button onclick="right(5)">لم تصدر حتا الان</button>
        `
    } else if (o == 6) {
        pageDiv.innerHTML = `
        <h2>السؤال 1 <span style="color: darkorange;">(متوسط)</span></h2>
        <h1>في اي سنة صدر جهاز بليستيشن 5</h1>
        <button onclick="wrong(6)">2019</button> 
    <button onclick="wrong(6)">2021</button> 
    <button onclick="right(6)">2020</button>
        `
    } else if (o == 7) {
        pageDiv.innerHTML = `
        <h2>السؤال 2 <span style="color: darkorange;">(متوسط)</span></h2>
        <h1>في اي سنة تم اصدار لعبة <br> grand theft auto v (5)</h1>
        <button onclick="right(7)">2013</button> 
    <button onclick="wrong(7)">2014</button> 
    <button onclick="wrong(7)">2012</button>
        `
    } else if (o == 8) {
        pageDiv.innerHTML = `
        <h2>السؤال 3 <span style="color: darkorange;">(متوسط)</span></h2>
        <h1>ماهو اكثر جهاز العاب مبيعا في العالم؟</h1>
        <button onclick="wrong(8)">بليستيشن 4</button> 
    <button onclick="wrong(8)">اكسبوكس 360</button> 
    <button onclick="right(8)">بليستيشن 2</button>
        `
    } else if (o == 9) {
        pageDiv.innerHTML = `
        <h2>السؤال 4 <span style="color: darkorange;">(متوسط)</span></h2>
        <h1>ماهي اكثر لعبة مبيعا في العالم</h1>
        <button onclick="right(9)">ماينكرافت</button> 
    <button onclick="wrong(9)">كول اوف ديوتي</button> 
    <button onclick="wrong(9)">Grand theft auto</button>
        `
    } else if (o == 10) {
        pageDiv.innerHTML = `
        <h2>السؤال 5 <span style="color: darkorange;">(متوسط)</span></h2>
        <h1>ما هي اللعبة التي جسدت الكرة الأرضية كلها <br>
        (حتى تتمكن من رؤية منزلك من اللعبة) <br>
        وكل معالم ومدن العالم </h1>
        <button onclick="wrong(10)">Forza horizon</button> 
    <button onclick="right(10)">microsoft flight simulator</button> 
    <button onclick="wrong(10)">لايوجد لعبة انجزت ذلك</button>
        `
    } else if (o == 11) {
        pageDiv.innerHTML = `
        <h2>السؤال 1 <span style="color: darkred;">(صعب)</span></h2>
        <h1>كم عدد اللاعبين في العالم؟</h1>
        <button onclick="wrong(11)">اقل من 200 مليون</button> 
    <button onclick="wrong(11)">من 200مليون الى 1 مليار</button> 
    <button onclick="right(11)">اكثر من مليارين انسان</button>
        `
    } else if (o == 12) {
        pageDiv.innerHTML = `
        <h2>السؤال 2<span style="color: darkred;">(صعب)</span></h2>
        <h1>ما اسم اول جهاز اكسبوكس</h1>
        <button onclick="wrong(12)">فقط (Xbox)</button> 
    <button onclick="right(12)">Xbox original</button> 
    <button onclick="wrong(12)">Xbox 1</button>
        `
    } else if (o == 13) {
        pageDiv.innerHTML = `
        <h2>السؤال 3 <span style="color: darkred;">(صعب)</span></h2>
        <h1>ماهو اول جهاز في العالم</h1>
        <button onclick="wrong(13)">اتاري</button> 
    <button onclick="wrong(13)">ميقا جينسس</button> 
    <button onclick="right(13)">The Odyssey</button>
        `
    } else if (o == 14) {
        pageDiv.innerHTML = `
        <h2>السؤال 4 <span style="color: darkred;">(صعب)</span></h2>
        <h1>كم حجم عالم ماينكرافت ؟</h1>
        <button onclick="right(14)">اكثر من 50 مليون متر</button> 
    <button onclick="wrong(14)">نفس حجم الكرة الارضية</button> 
    <button onclick="wrong(14)">اقل من 50 مليون متر</button>
        `
    }  else if (o == 15) {
        pageDiv.innerHTML = `
        <h2>السؤال 5 <span style="color: darkred;">(صعب)</span></h2>
        <h1>كم عد مبيعات جهاز بليستيشن 1</h1>
        <button onclick="wrong(15)">اقل من 40 مليون</button> 
    <button onclick="right(15)">اكثر من 80  مليون</button> 
    <button onclick="wrong(15)">من 40 مليون الى 80 مليون</button>
        `
    } else if (o === "end") {
        pageDiv.innerHTML = `<h1 class="end-el">!النهاية</h1> <h2>
        شكرا لك على زيارة موقعي اذا كنت تريد التواصل معي فقط <a target="_blank" href="https://www.instagram.com/y_g_v/">أنقر هنا</a>
        <br> <p>لقد حصلت على(<span style="color: green;">${correctTimes}</span>) أجابات صحيحة و (<span style="color: red;">${wrongTimes}</span>)أجابات خاطئة</p>
        </h2>
        `
    }
    }
function wrong(q) {
    if (q == 1) {
        pageDiv.innerHTML = `
        <h1><span style="color:red;">خطأ!</span>  <br>الشركة التي قامت بصناعة<br> grand theft auto <br>هي <br>rockstar games <br> <a target="_blank" href="https://en.wikipedia.org/wiki/Grand_Theft_Auto">المصدر</a>  </h1>
        <button onclick="start(2)"> استمرار </button>
        `
    }    else if (q == 2) {
        pageDiv.innerHTML = `
        <h1><span style="color:red;">خطأ! </span> <br> الشركة التي تملك بليستيشن هي سوني <br> <a target="_blank" href="https://en.wikipedia.org/wiki/Grand_Theft_Auto">المصدر</a>  </h1>
        <button onclick="start(3)"> استمرار </button>
        `
    }  else if (q == 3) {
        pageDiv.innerHTML = `
        <h1><span style="color:red;">خطأ!</span>  <br>فورتنايت مجانية<br> <a target="_blank" href="https://en.wikipedia.org/wiki/Fortnite">المصدر</a></h1>
        <button onclick="start(4)"> استمرار </button>
        `
    } else if (q == 4) {
        pageDiv.innerHTML = `
        <h1><span style="color:red;">خطأ!</span>  <br>GOTY تعني لعبة السنة<br> <a target="_blank" href="https://www.dictionary.com/e/acronyms/goty/">المصدر</a></h1>
        <button onclick="start(5)"> استمرار </button>
        `
    } else if (q == 5) {
        pageDiv.innerHTML = `
        <h1><span style="color:red;">خطأ!</span>  <br>grand theft auto vi (6)<br> لم تصدر حتا الان<br> <a target="_blank" href="https://www.pcgamesn.com/grand-theft-auto-vi/gta-6-release-date-setting-map-characters-gameplay-trailers">المصدر</a></h1>
        <button onclick="start(6)"> استمرار </button>
        `
    } else if (q == 6) {
        pageDiv.innerHTML = `
        <h1><span style="color:red;">خطأ!</span>  <br>تم اصدار جهاز بليستيشن 5 عام 2020<br> <a target="_blank" href="https://en.wikipedia.org/wiki/PlayStation_5">المصدر</a></h1>
        <button onclick="start(7)"> استمرار </button>
        `
    } else if (q == 7) {
        pageDiv.innerHTML = `
        <h1><span style="color:red;">خطأ!</span>  <br>grand theft auto v (5)<br> اصدرت عام  2013<br> <a target="_blank" href="https://en.wikipedia.org/wiki/Grand_Theft_Auto_V">المصدر</a></h1>
        <button onclick="start(8)"> استمرار </button>
        `
    } else if (q == 8) {
        pageDiv.innerHTML = `
        <h1><span style="color:red;">خطأ!</span>  <br>اكثر جهاز العاب مبيعا هو بليستيشن 2<br> <a target="_blank" href="https://www.statista.com/statistics/268966/total-number-of-game-consoles-sold-worldwide-by-console-type/">المصدر</a></h1>
        <button onclick="start(9)"> استمرار </button>
        `
    
    } else if (q == 9) {
        pageDiv.innerHTML = `
        <h1><span style="color:red;">خطأ! </span> <br>اكثر لعبة مبيعا هي ماينكرافت<br> <a target="_blank" href="https://en.wikipedia.org/wiki/List_of_best-selling_video_games">المصدر</a></h1>
        <button onclick="start(10)"> استمرار </button>
        `
    
    } else if (q == 10) {
        pageDiv.innerHTML = `
        <h1><span style="color:red;">خطأ!</span>  <br>اللعبة التي تحتوي على هذا هي<br> microsoft flight simulator <br> <a target="_blank" href="https://en.wikipedia.org/wiki/Microsoft_Flight_Simulator">المصدر</a></h1>
        <button onclick="start(11)"> استمرار </button>
        `
    
    } else if (q == 11) {
        pageDiv.innerHTML = `
        <h1><span style="color:red;">خطأ!</span>  <br>هنالك اكثر من 3.30 مليار لاعب في العالم<br> <a target="_blank" href="https://dataprot.net/statistics/gamer-demographics/">المصدر</a></h1>
        <button onclick="start(12)"> استمرار </button>
        `
    
    } else if (q == 12) {
        pageDiv.innerHTML = `
        <h1><span style="color:red;">خطأ!</span> <br>اسم اول جهاز اكسبوكس هو xbox original<br> <a target="_blank" href="https://en.wikipedia.org/wiki/Xbox#First_generation:_Xbox">المصدر</a></h1>
        <button onclick="start(13)"> استمرار </button>
        `
    
    } else if (q == 13) {
        pageDiv.innerHTML = `
        <h1><span style="color:red;">خطأ!</span> <br>اول جهاز العاب هو(The Odyssey)<br> <a target="_blank" href="https://www.computermuseumofamerica.org/2020/06/22/the-first-gaming-console/">المصدر</a></h1>
        <button onclick="start(14)"> استمرار </button>
        `
    
    } else if (q == 14) {
        pageDiv.innerHTML = `
        <h1><span style="color:red;">خطأ!</span> <br>حجم عالم ماينكرافت يصل الى 60 مليون متر <br> <a target="_blank" href="https://www.lifewire.com/how-big-is-a-minecraft-world-5212822">المصدر</a></h1>
        <button onclick="start(15)"> استمرار </button>
        `
    
    } else if (q == 15) {
        pageDiv.innerHTML = `
        <h1><span style="color:red;">خطأ!</span> <br>102<br> مليون نسخة مباعة من جهاز بليستيشن 1<br> <a target="_blank" href="https://en.wikipedia.org/wiki/List_of_best-selling_game_consoles">المصدر</a></h1>
        <button onclick="start('end')"> استمرار </button>
        `
    
    }
    wrongTimes += 1
}

function right(r) {
    if (r == 1) {
        pageDiv.innerHTML = `
        <h1><span style="color:green;">صحيح!</span>  <br>الشركة التي قامت بصناعة<br>grand theft auto<br> هي<br> rockstar games <br> <a target="_blank" href="https://en.wikipedia.org/wiki/Grand_Theft_Auto">المصدر</a>  </h1>
        <button onclick="start(2)"> استمرار </button>
        `
    } else if (r == 2) {
        pageDiv.innerHTML = `
        <h1><span style="color:green;">صحيح!</span>  <br> الشركة التي تملك بليستيشن هي سوني <br> <a target="_blank" href="https://en.wikipedia.org/wiki/Grand_Theft_Auto">المصدر</a>  </h1>
        <button onclick="start(3)"> استمرار </button>
        `
    } else if (r == 3) {
        pageDiv.innerHTML = `
        <h1><span style="color:green;">صحيح!</span>  <br>فورتنايت مجانية<br> <a target="_blank" href="https://en.wikipedia.org/wiki/Fortnite">المصدر</a>  </h1>
        <button onclick="start(4)"> استمرار </button>
        `
    }   else if (r == 4) {
        pageDiv.innerHTML = `
        <h1><span style="color:green;">صحيح!</span>  <br>GOTY تعني لعبة السنة<br> <a target="_blank" href="https://www.dictionary.com/e/acronyms/goty/">المصدر</a>  </h1>
        <button onclick="start(5)"> استمرار </button>
        `
    }  else if (r == 5) {
        pageDiv.innerHTML = `
        <h1><span style="color:green;">صحيح! </span> <br>grand theft auto vi (6) لم تصدر حتا الان<br> <a target="_blank" href="https://www.pcgamesn.com/grand-theft-auto-vi/gta-6-release-date-setting-map-characters-gameplay-trailers">المصدر</a>  </h1>
        <button onclick="start(6)"> استمرار </button>
        `
    }  else if (r == 6) {
        pageDiv.innerHTML = `
        <h1><span style="color:green;">صحيح!</span>  <br>تم اصدار جهاز بليستيشن 5 عام 2020<br> <a target="_blank" href="https://en.wikipedia.org/wiki/PlayStation_5">المصدر</a>  </h1>
        <button onclick="start(7)"> استمرار </button>
        `
    }  else if (r == 7) {
        pageDiv.innerHTML = `
        <h1><span style="color:green;">صحيح!</span>  <br>grand theft auto v (5) اصدرت عام 2013<br> <a target="_blank" href="https://en.wikipedia.org/wiki/Grand_Theft_Auto_V">المصدر</a>  </h1>
        <button onclick="start(8)"> استمرار </button>
        `
    }  else if (r == 8) {
        pageDiv.innerHTML = `
        <h1><span style="color:green;">صحيح!</span>  <br>اكثر جهاز العاب مبيعا هو بليستيشن 2<br> <a target="_blank" href="https://www.statista.com/statistics/268966/total-number-of-game-consoles-sold-worldwide-by-console-type/">المصدر</a></h1>
        <button onclick="start(9)"> استمرار </button>
        `
    }  else if (r == 9) {
        pageDiv.innerHTML = `
        <h1><span style="color:green;">صحيح!</span>  <br>اكثر لعبة مبيعا هي ماينكرافت<br> <a target="_blank" href="https://en.wikipedia.org/wiki/List_of_best-selling_video_games">المصدر</a></h1>
        <button onclick="start(10)"> استمرار </button>
        `
    }  else if (r == 10) {
        pageDiv.innerHTML = `
        <h1><span style="color:green;">صحيح!</span>  <br>اللعبة التي تحتوي على هذا هي<br> microsoft flight simulator <br> <a target="_blank" href="https://en.wikipedia.org/wiki/Microsoft_Flight_Simulator">المصدر</a></h1>
        <button onclick="start(11)"> استمرار </button>
        `
    }  else if (r == 11) {
        pageDiv.innerHTML = `
        <h1><span style="color:green;">صحيح!</span>  <br>هنالك اكثر من 3.24 مليار لاعب في العالم<br> <a target="_blank" href="https://dataprot.net/statistics/gamer-demographics/">المصدر</a></h1>
        <button onclick="start(12)"> استمرار </button>
        `
    } else if (r == 12) {
        pageDiv.innerHTML = `
        <h1><span style="color:green;">صحيح!</span>  <br>اسم اول جهاز اكسبوكس هو<br> xbox original<br> <a target="_blank" href="https://en.wikipedia.org/wiki/Xbox#First_generation:_Xbox">المصدر</a></h1>
        <button onclick="start(13)"> استمرار </button>
        `
    } else if (r == 13) {
        pageDiv.innerHTML = `
        <h1><span style="color:green;">صحيح!</span>  <br>اول جهاز العاب هو<br> (The Odyssey)<br> <a target="_blank" href="https://www.computermuseumofamerica.org/2020/06/22/the-first-gaming-console/">المصدر</a></h1>
        <button onclick="start(14)"> استمرار </button>
        `
    }
    else if (r == 14) {
        pageDiv.innerHTML = `
        <h1><span style="color:green;">صحيح!</span>  <br>حجم عالم ماينكرافت يصل الى 60 مليون متر <br> <a target="_blank" href="https://www.lifewire.com/how-big-is-a-minecraft-world-5212822">المصدر</a></h1>
        <button onclick="start(15)"> استمرار </button>
        `
    } else if (r == 15) {
        pageDiv.innerHTML = `
        <h1><span style="color:green;">صحيح!</span>  <br>102<br> 1 مليون نسخة مباعة من جهاز بليستيشن <br> <a target="_blank" href="https://en.wikipedia.org/wiki/List_of_best-selling_game_consoles">المصدر</a></h1>
        <button onclick="start('end')"> استمرار </button>
        `
    }
    correctTimes += 1
}