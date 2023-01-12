import {
  EcommerceImg,
  BirthdayReminderImg,
  hrprojectImg,
  GoogleBooksImg,
  TodoListImg,
  hrprojectImg2,
  EcommerceImg2,
  BirthdayReminderImg2,
  GoogleBooksImg2,
  TodoListImg2,
  fullstackEcommerce,
  fullstackEcommerce2,
  fullstackHrModule,
  fullstackHrModule2,
} from "../Portfolio/ProjectImages";

export const projectData = [
  {
    id: 1,
    image: hrprojectImg,
    detailImageTwo: hrprojectImg2,
    title: "Employees Table App",
    codeLink: "https://github.com/yusifmustafa/MyHrProject",
    detailHeaderTitle: "Proyekt haqqında ümumi məlumat",
    detailBodyTitle:
      "Bu Proyekt ilə biz cədvələ yeni işçilər əlavə edə bilirik.Həmçinin burada hər bir işçinin id'sinə görə məlumatlarında dəyişiklik edə,silə bilərik.Həmçinin paginationdan istifadə edilib.Hər bir səhifəyə 10 işçi əlavə edilir.",
  },
  {
    id: 2,
    image: EcommerceImg,
    title: "Ecommerce App",
    codeLink: "https://github.com/yusifmustafa/ecommerce-project",
    detailImageTwo: EcommerceImg2,
    detailHeaderTitle: "Proyekt haqqında ümumi məlumat",
    detailBodyTitle:
      "Bu proyekt Elektron ticarət proyektidir,brauzerdən çəkilən APİ ilə (fakestoryAPi) yığılıb.Həmçinin proyektdə Redux Toolkitdən istifadə olunub.Proyektdə Məhsullar üzrə axtarış etmək mümkündür.Həmçinin məhsullar tipinə görə bölünür,məsələn man butonuna klikləyən zaman ekranda yalnız kişi geyimləri görünür.Məhsullar haqqında ümumi məlumat əldə etmək üçün məhsula klikləmək kifayətdir.Proqramı ilk açdığımız zaman ekrana login/password pəncərəsi çıxır.Register edən userin məlumatları LocalStorage`də saxlanılır.Sonra register edilən username password ilə giriş etmək mümkün olur.Məlumatlar localdakı ilə eyni olmasa (səhv username password yazsanız) alert mesajı çıxacaq və sayta giriş uğursuz olacaqdır.",
  },
  {
    id: 3,
    image: BirthdayReminderImg,
    title: "Birthday Reminder App",
    codeLink: "https://github.com/yusifmustafa/birthdayReminder",
    detailImageTwo: BirthdayReminderImg2,
    detailHeaderTitle: "Proyekt haqqında ümumi məlumat",
    detailBodyTitle:
      "Bu proyekt bəsit bir ad günü xatırlatma proyektidir.Clear All deyərək bütün userləri silmək mümkündür.Siyahıda olan şəxs sayı aşağıda göstərilir.",
  },
  {
    id: 4,
    image: GoogleBooksImg,
    title: "Google Books App",
    codeLink: "https://github.com/yusifmustafa/GoogleBooks",
    detailImageTwo: GoogleBooksImg2,
    detailHeaderTitle: "Proyekt haqqında ümumi məlumat",
    detailBodyTitle:
      "Bu proyekt Google Books proyektidir.Rapid API saytından götürülən Books Api ilə yığılıb.Proyektdə kitablar üzrə axtarış etmək mümkündür.",
  },
  {
    id: 5,
    image: TodoListImg,
    title: "TodoList App",
    codeLink: "https://github.com/yusifmustafa/todolist-redux-toolkit",
    detailImageTwo: TodoListImg2,
    detailHeaderTitle: "Proyekt haqqında ümumi məlumat",
    detailBodyTitle:
      "Bu proyekt bəsit bir Todo List Proyektidir.Burada Redux Toolkitdən istifadə olunub.User əlavə etmək,həmçinin əlavə olunan istifadəçiləri siyahıdan silmək,hər hansı dəyişiklik etmək mümkündür.",
  },
  {
    id: 6,
    image: fullstackEcommerce,
    title: "FullStack Ecommerce_App",
    codeLink: "https://github.com/yusifmustafa/fullstack-booksales",
    detailImageTwo: fullstackEcommerce2,
    detailHeaderTitle: "Proyekt haqqında ümumi məlumat",
    detailBodyTitle:
      "Bu Proyekt Kitab satışı səhifəsidir.İstənilən kitabı səbətə atıb,səbəttən silə bilərsiniz.Əlavə olaraq istənilən kitabın üzrəinə klikləyib həmən kitab haqqında məlumatları görmək mümkündür.Backend Node Js ilə yazılıb və mənə məxsusdur.",
  },
  {
    id:7,
    image:fullstackHrModule,
    title:"FullStack Employee Register (CRUD)",
    codeLink:"ss",
    detailImageTwo:fullstackHrModule2,
    detailHeaderTitle:"Proyekt haqqında ümumi məlumat",
    detailBodyTitle:"İşçiləri Qeydiyyatdan keçirmək,siyahıdan silmək,işçilərin məlumatlarına düzəliş etmək mümkündür.Backend Node Js ilə yazılıb,Database üçünsə MySqldən istifadə olunub."

  }
];
