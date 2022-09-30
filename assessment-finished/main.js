const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');
//ここまでが変数宣言

//乱数の発生
function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length); //Mathライブラリ、配列の長さの範囲内でrandomな整数を生成
  return array[random];
}

//入れ替えたい文字列を格納
const storyText = '気温が華氏94度近くある暑い夏の日のことだった。そのひは本当に暑かったから:insertx:は散歩に出かけた。彼らが:inserty:に到着した時、彼らは怖がり始めた。そして:insertz:。ボブは全てのことに気がついた。だがそれは驚くべきことではなかった — :insertx:は重さ300ポンドもあったんだ。それはある夏の暑い日のことだった。';
const insertX = ['ゴブリンのウィリー', 'ビッグダディー', 'サンタクロース'];
const insertY = ['スープキッチン', 'ディズニーランド', '官邸'];
const insertZ = ['勝手に燃えた', '歩道の水溜りに溶けた', 'ナメクジになってヌメヌメと去っていった'];

//const storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
//const insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
//const insertY = ['the soup kitchen', 'Disneyland', 'the White House'];
//const insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];


//格納されている文字列からランダムに選ぶ
randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  //配列からランダムに選んだ文字列を変数に入れる
  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  //文字列を置き換える
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);

  //主人公の名前を入力された名前に置き換える
  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('ボブ', name);
  }

  //もし日本のラジオボタンが押されたら気温と重さを置き換える
  if (document.getElementById("jp").checked) {
    const weight = `${Math.round(300*0.0714286)}ストーン`;
    const temperature =  `摂氏${Math.round((94-32) * 5 / 9)}度`;
    newStory = newStory.replace('華氏94度', temperature);
    newStory = newStory.replace('300ポンド', weight);
    //const weight = `${Math.round(300*0.0714286)} stone`;
    //const temperature =  `${Math.round((94-32) * 5 / 9)} centigrade`;
    //newStory = newStory.replace('94 fahrenheit', temperature);
    //newStory = newStory.replace('300 pounds', weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
