List of componentS config
================================================================== 

Content2
Content
MarketplaceCategoryContent
News
ندارد

---------------------------

To have an absolute menu and top, follow the rule below

<!--
    <div
        className="col-12"
        style={{
            position: "absolute",
            top: "0px",
            width: "100%",
            zIndex: "10",
        }}
    >
        <Top config={{ position: "absolute" }} />
        <Menu config={{ position: "absolute" }} />
    </div>
-->

---------------------------

Top :
config{{
    width:"container" or "container-fluid"
    position:"absolute" or "relative" // در صورت انتخاب Absolute بکگراند به ترنسپرنت در می آید
}}

--------------------------- 

Menu :
config={{
    width:"container" or "container-fluid"
    position:"absolute" or "relative" // در صورت انتخاب Absolute بکگراند به ترنسپرنت در می آید و متن نوشته ها به رنگ سفید در می آید
    menu_type="2type" or "fullPage" //این ویژگی برای تعیین نمایش ویا عدم نمایش منوها به صورت هم زمان در حالت lg است
    backColor="#color" // در صورت ابسولوت بودن این ویژگی تاثیری ندارد
    center_menu=true or false // منوی وسط چین در صورت false نمایش داده نمیشود
}}

--------------------------- 

FullScreenSlide:
برای نمایش صحیح به فایل css موجود در پوشه styles نیاز است
--FullScreenSlide.css

----------------------------

BoxSlider :
برای نمایش صحیح به فایل css موجود در پوشه styles نیاز است
--BoxSlider.css

---------------------------

Categories:
برای نمایش صحیح به فایل css موجود در پوشه styles نیاز است
--category.css

---------------------------

Categories2:
برای نمایش صحیح به فایل css موجود در پوشه styles نیاز است
--category.css

---------------------------

Herosection:
config{{
    objectFit:"contain" or "cover"  //نحوه نمایش موک آپ
    background:"/" // بکگراند کامپونت
    bgsvg:`` or  "none"  // svg استفاده شده در بکگراند بخش پایین که جدا کننده کامپونت از باقی موارد  هستش
    videoicone:`` // ایکون ویدئو کنار متن
    width:"container" or "container-fluid"
    class1:"" // کلاس های بوتسترپ و اختصاصی برای بخش متن
    class2:"" // کلاس های بوتسترپ و اختصاصی برای بخش موکاپ
    textColor:"light" or "dark"  // تم رنگی متن که به صورت پیش فرض سفید است
    theme: 1  or 2  //2 نوع نمایش رو تعیین میکند 
}}

---------------------------

InfoSection:
config{{
    width:"container" or "container-fluid"
    titleTextAlign:"center" or "left" or "right" or "start" or "end" // جهت متنتایتل بزرگ بالا
    gx:""  // کلاس بوتسترپ که تایین کننده میزان فاصله المان ها به صورت افقی هستش در یک ردیف - فقط عدد قرار دهید و تا 5 هم مجاز هستش
    gy:"" // کلاس بوتسترپ که تایین کننده میزان فاصله المان ها به صورت عمودی هستش در یک ردیف - فقط عدد قرار دهید و تا 5 هم مجاز هستش
    numberColLg:""  // تعداد ستون ها در حالت lg
    numberColMd:""  // تعداد ستون ها در حالت md
    numberColSm:""  // تعداد ستون ها در حالت sm
    colType:"horizontal" or "vertical" or "text-center"  //  نوع نمایش المان ها که به ترتیب عمودی ساده و افقی و عمودی وسطچین هستند
    imgSize="" // مستواند عدد به همراه px  یا % باشد
}}

---------------------------

Demo:
config{{
    width:"container" or "container-fluid"
    speed="" //سرعت اسلاید رد حالت multiPlayer
    demoType:"simple" or "multiPlayer"  // حالت نمایش اسلاید در 2 حالت اسلادر ساده و عکس متحرک پیوسته
    multiPlayerHeight={"700px"}
}}
---------------------------
Faq:
config{{
    width:"container" or "container-fluid"
    bgsvg={``}  // svg استفاده شده در بکگراند بخش پایین که جدا کننده کامپونت از باقی موارد  هستش
}}
--------------------------
Update:
config{{
    width:"container" or "container-fluid"
    bgsvg={``}  // svg استفاده شده در بکگراند بخش پایین که جدا کننده کامپونت از باقی موارد  هستش
    bgColor:"/" // بکگراند کامپونت
}}
---------------------------

Footer :
config={{
    padding:"" 
}}

---------------------------

Contact :
config={{
    icon:"" 
    bgColor:"" 
}}