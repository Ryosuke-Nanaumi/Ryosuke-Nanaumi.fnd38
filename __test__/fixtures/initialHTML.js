export const fullScreenFlowHTML = `
<section id="start-screen"><button class="start-button">はじめる</button></section>
<section id="input-information-screen-1" style="display: none;"><button class="measurement-button">はじめる</button>
<button id="nextButton" style="display: none;">はじめる</button>
  <input type="number" id="age" value="25" />
  <input type="number" id="weight" value="70" />
  <input type="number" id="height" value="170" />
  <select id="sexSelect"><option value="male" selected>男性</option></select>
  <select id="activitySelect"><option value="high" selected>高い</option></select>
  <div id="metabolismResultBox">
  <div id="metabolismResult"></div>
  <div id="tdeeResult"></div>
  </div>
</section>
<section id="input-information-screen-2" style="display: none;"></section>
`

export const screenInput2HTML = `
<section id="input-information-screen-2">
    <h2>目標を設定しましょう</h2>
    <form class="user-information-form-2" id="informationForm2">
      <label>目標体重<input type="number" id="targetWeight" value="50" required ></label>
      <label>達成までの日数<input type="number" id="targetDate" value="100"></label>
    </form>
    <button class="create-button" id="createButton">目標プランを作成する</button>
  </section>
`