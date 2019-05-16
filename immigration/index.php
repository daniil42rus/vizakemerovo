
<!DOCTYPE html>
<html lang="ru">
<head>
	<meta charset="utf-8">
	<title>Легальное и гарантированное трудоустройство за границей и иммиграционный сервис - ПЕРВЫЙ ВИЗОВЫЙ КЕМЕРОВО</title>
	<meta name="description" content="ПЕРВЫЙ ВИЗОВЫЙ КЕМЕРОВО поможет Вам в получение рабочих виз, оформление официального разрешения на работу, оформление ВНЖ и ПМЖ.">		<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<?require ('../meta.php');?>

</head>
<body>

<?require ('../nav.php');?>

<section class="Header ImmHeader">
	<div class="Darken">
		<h1 class="Header-Offer">Легальное и гарантированное трудоустройство за границей и иммиграционный сервис</h1>
		<p class="HeaderSmallNotice">ПОЛУЧЕНИЕ РАБОЧИХ ВИЗ, ОФОРМЛЕНИЕ ОФИЦИАЛЬНОГО РАЗРЕШЕНИЯ НА РАБОТУ, ОФОРМЛЕНИЕ ВНЖ И ПМЖ</p>
        <?require ('../HeaderForm.php');?>
	</div>
</section><section id="zagran" name="zagran" class="Zagran Section">
  <div class="container">
    <div class="row">
      <div class="col-12 text-center text-lg-left">
        <div class="Section-Title">
          <h2>Визизово-туристический центр Кемерова оказывает услуги по трудоустройству за рубежом и иммиграционному сервису</h2>
          <div class="Title-Line"></div>
        </div>
      </div>
    </div>
   <!--  <div class="row" style="margin-top: 32px">
      <div class="col-12">
        ПЕРВЫЙ ВИЗОВЫЙ КЕМЕРОВО поможет Вам найти высокооплачиваемую работу за границей или осуществит Ваши иммиграционные намерения. Наш центр тесно сотрудничает с партнерами, имеющими официальные договоры со множеством иностранных работодателей, которые предлагают большой выбор рабочих мест, а также с проверенными и опытными  зарубежными иммиграционными адвокатами и фирмами с безупречной репутацией.
      </div>
    </div> -->
    <div class="row" style="margin-top: 32px">
      <div class="col-12 col-md-6">
        <div class="SubmissionsList ImmigList">
        <ul id="WhatWeDo">
            <li><div><i class="far fa-check"></i></div> Находим работу по Вашим навыкам и с высокой заработной платой</li>
            <li><div><i class="far fa-check"></i></div> Сотрудничаем с партнерами, имеющими официальные договоры со множеством иностранных работодателей, которые предлагают большой выбор вакансий</li>
            <li><div><i class="far fa-check"></i></div> Работаем с проверенными и опытными  зарубежными иммиграционными адвокатами и фирмами с безупречной репутацией</li>
            <li><div><i class="far fa-check"></i></div> Консультируем и подробно рассказываем об особенностях пребывания в странах, где Вы собираетесь работать или куда бы Вы хотели иммигрировать</li>
            <li><div><i class="far fa-check"></i></div> Оказываем эффективное содействие в оформлении необходимых для выезда документов.</li>
            <li><div><i class="far fa-check"></i></div> Помогаем оформлять рабочие визы или ВНЖ в сложных случаях или после отказов в Консульских службах зарубежных Посольств</li>
        </ul>
        </div>
      </div>
      <div class="col-12 col-md-6 text-center Submissions-Mobile">
        <div class="RequiredDocuments-Form ImmigrationForm">
        <h3 class="Form-Title">Оформить заявку на консультацию</h3>
        <div class="Form-2-Columns">
          <div class="Form-Item">
            <input type="text" class="Form-Input FormName" required>
            <label class="Input-InputLabel">Ваше имя</label>
          </div>
          <div class="Form-Item mr-0">
            <input type="text" class="Form-Input PhoneNumber FormPhone" required>
            <label class="Input-InputLabel">Ваш телефон</label>
          </div>
        </div>
        <div class="text-left">
          <div class="Form-Item">
            <input type="email" class="Form-Input FormEmail" required>
            <label class="Input-InputLabel">Ваш E-mail</label>
          </div>
        </div>
        <div class="text-left">
          <label class="Form-DetailLabel">Выберите тип консультации</label>
          <div class="Form-IconicInput MigType">
            <div id="MigType1" class="Iconic ml-0" onclick="SetMigType(1);">
              <img src="../img/icons/move.svg" class="IconicInput-Icon " alt="Иммиграция">
              <span>Иммиграция</span>
            </div>
            <div id="MigType2" class="Iconic Trud" onclick="SetMigType(2);">
              <img src="../img/icons/job.svg" class="IconicInput-Icon" alt="Трудоустройство">
              <span>Трудоустройство</span>
            </div>
          </div>
        </div>
        <div class="text-left" style="margin-bottom: 32px">
          <label class="Form-DetailLabel">Выберите страну</label><br/>
          <div class="SelectChooser">
            <label>
              <select class="FTCountry">
                <option value="" selected disabled>Выберите страну</option>
                <option value='Австрия'>Австрия</option><option value='Бельгия'>Бельгия</option><option value='Германия'>Германия</option><option value='Испания'>Испания</option><option value='Италия'>Италия</option><option value='Канада'>Канада</option><option value='Литва'>Литва</option><option value='Монако'>Монако</option><option value='Румыния'>Румыния</option><option value='США'>США</option><option value='Франция'>Франция</option><option value='Чехия'>Чехия</option><option value='Швейцария'>Швейцария</option><option value='Швеция'>Швеция</option>              </select>
            </label>
          </div>
        </div>
        <input type="hidden" id="migtype">
        <button class="ActiveButton" onclick="ConfirmMigration();">Получить консультацию</button>
        <p class="Form-Note">Отправляя эту форму, Вы даете своё согласие нашему сайту на обработку персональной информации.</p>
      </div>
    </div>

  </div>
</div>
</section>

<section id="documents" name="documents" class="Documents Section">
	<div class="container">
		<div class="row">
			<div class="col-12 text-center text-lg-left">
				<div class="Section-Title">
					<h2>Как мы воплощаем Вашу заграничную мечту</h2>
					<div class="Title-Line"></div>
				</div>
			</div>
		</div>
		
		<div class="row">
			<div class="col-12 col-md-3 text-center">
				<div class="Documents-Item">
					<div class="Item-Icon">
						<img src="../img/icons/zayavka.png" alt="Заявка">
					</div>
					<div class="Item-Title ImmDreamText">Вы оставляете заявку на сайте или по телефону</div>
				</div>
			</div>
			<div class="col-12 col-md-3 text-center">
				<div class="Documents-Item">
					<div class="Item-Icon">
						<img src="../img/icons/callback.png" alt="Колбэк">
					</div>
					<div class="Item-Title ImmDreamText">Мы связываемся с Вами для обсуждения всех основных условий и моментов</div>
				</div>
			</div>
			<div class="col-12 col-md-3 text-center">
				<div class="Documents-Item">
					<div class="Item-Icon">
						<img src="../img/icons/officei.png" alt="Viber">
					</div>
					<div class="Item-Title ImmDreamText">Вы приезжаете в наш офис для оформления документов</div>
				</div>
			</div>
			<div class="col-12 col-md-3 text-center">
				<div class="Documents-Item">
					<div class="Item-Icon">
						<img src="../img/icons/calli.png" alt="Viber">
					</div>
					<div class="Item-Title ImmDreamText">Мы консультируем Вас по всем вопросам трудоустройства за границей или иммиграционным вопросам,вырабатываем для Вас Вашу личную программу трудоустройства или иммиграционных действий и реализуем её лично для Вас</div>
				</div>
			</div>
		</div>

	</div>
</section><? require('../contacts.php');?>
<? require('../footer.php');?>
	</body>
</html>