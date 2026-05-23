import SectionImage from '../components/SectionImage'

const deficiencyData = [
  { name: '心气虚', bad: '劳倦/年老', fault: '虚', treasure: '气', room: '心', symptom: '心悸气短、自汗、面色淡白、舌淡苔白、脉虚弱', formula: '劳倦×虚×气×心' },
  { name: '心血虚', bad: '思虑/失血', fault: '虚', treasure: '血', room: '心', symptom: '心悸失眠、健忘多梦、面色无华、舌淡、脉细', formula: '思虑×虚×血×心' },
  { name: '脾气虚', bad: '饮食/劳倦', fault: '虚', treasure: '气', room: '脾', symptom: '食少腹胀、便溏乏力、面色萎黄、舌淡苔白、脉缓弱', formula: '饮食×虚×气×脾' },
  { name: '肝血虚', bad: '失血/久病', fault: '虚', treasure: '血', room: '肝', symptom: '头晕目眩、视物模糊、爪甲不荣、月经量少、舌淡、脉细', formula: '久病×虚×血×肝' },
  { name: '肾阳虚', bad: '年老/久病', fault: '虚', treasure: '阳', room: '肾', symptom: '腰膝酸冷、畏寒肢冷、夜尿多、舌淡胖、脉沉迟', formula: '年老×虚×阳×肾' },
  { name: '肾阴虚', bad: '久病/房劳', fault: '虚', treasure: '阴', room: '肾', symptom: '腰膝酸软、潮热盗汗、五心烦热、舌红少苔、脉细数', formula: '房劳×虚×阴×肾' },
]

const excessData = [
  { name: '肝气郁结', bad: '情志不畅', fault: '滞/逆', treasure: '气', room: '肝', symptom: '情志抑郁、胸胁胀痛、嗳气叹息、月经不调、舌淡红苔薄白、脉弦', formula: '怒×滞+逆×气×肝' },
  { name: '寒湿困脾', bad: '贪凉/居湿', fault: '滞', treasure: '气', room: '脾+胃', symptom: '脘腹胀闷、口淡不渴、大便稀溏、舌淡胖苔白腻、脉濡缓', formula: '寒+湿×滞×气×脾+胃' },
  { name: '胃热炽盛', bad: '过食辛辣', fault: '热', treasure: '阴', room: '胃', symptom: '胃脘灼痛、口渴口臭、牙龈肿痛、舌红苔黄、脉滑数', formula: '辛辣×热×阴×胃' },
]

const mixedData = [
  { name: '肝郁脾虚', bad: '情志+饮食', fault: '滞+虚', treasure: '气', room: '肝+脾', symptom: '胁胀作痛、便溏不爽、急躁易怒、舌淡红苔白、脉弦缓', formula: '郁+虚×滞×气×肝+脾' },
  { name: '气虚血瘀', bad: '久病/年老', fault: '虚+瘀', treasure: '气+血', room: '心+脉', symptom: '心悸胸闷、刺痛固定、面色晦暗、舌紫暗有瘀斑、脉涩', formula: '久病×虚+瘀×气+血×心+脉' },
]

const externalData = [
  { name: '风热犯肺', bad: '风+热', fault: '郁', treasure: '气', room: '肺+卫分', symptom: '发热重、微恶寒、咽喉肿痛、咳嗽黄痰、舌红苔薄黄、脉浮数', formula: '风+热×郁×气×肺+卫分' },
  { name: '风寒束肺', bad: '风+寒', fault: '束/郁', treasure: '气', room: '肺+卫分', symptom: '恶寒重、发热轻、咳痰清稀、鼻塞流清涕、舌淡苔薄白、脉浮紧', formula: '风+寒×束+郁×气×肺+卫分' },
]

export default function Module5() {
  return (
    <div className="page-enter-active">
      <div className="text-center mb-12">
        <span className="text-5xl">🔍</span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-ink-700 mt-4 mb-2">
          模块五：超级破案公式——证候的生成
        </h1>
        <div className="decorative-line mx-auto" />
        <p className="text-ink-500 text-lg">
          掌握了病位和病因，现在把它们组装起来——见证奇迹的时刻
        </p>
      </div>

      <SectionImage
        prompt="Mathematical formula transformation into Chinese medicine concept, interconnected puzzle pieces forming a diagnosis, wooden building blocks arranged in systematic order, warm study desk with soft natural light, scholarly organized composition"
        alt="破案公式"
      />

      <div className="content-section">
        {/* ========== sec-m5-1: 万能组合公式 ========== */}
        <section id="sec-m5-1">
          <h2>一、万能组合公式——证候是怎么来的？</h2>
          <p>
            通过前四个模块的学习，我们已经认识了身体的"房间"（病位）、捣乱的"坏蛋"（病因）以及"宝贝"（气血阴阳）和"毛病"（病性）。现在，我们要把这些知识<strong>组装起来</strong>，完成辨证的最后一步——<strong>证候的生成</strong>。
          </p>

          <h3>证候 = 坏蛋 × 毛病 × 宝贝 × 房间</h3>
          <p>
            中医辨证的终极公式可以浓缩为四个要素：
          </p>
          <div className="bg-ink-50 rounded-lg p-6 my-6 text-center">
            <p className="text-xl font-bold text-ink-700 mb-2">
              🦠 坏蛋（病因） × 🔧 毛病（病性） × 💎 宝贝（气血阴阳） × 🏠 房间（病位）
            </p>
            <p className="text-ink-600">
              四个要素相乘，就得到最终的<strong>证候名称</strong>。
            </p>
          </div>
          <ul>
            <li><strong>🦠 坏蛋（病因）</strong>——谁在捣乱？风寒暑湿燥火？还是痰饮瘀血气滞？从模块四中找答案。</li>
            <li><strong>🔧 毛病（病性）</strong>——出了什么问题？虚了？实了？热了？寒了？滞了？瘀了？</li>
            <li><strong>💎 宝贝（气血阴阳）</strong>——伤到了什么？气、血、阴、阳、精、津液？从模块三中找答案。</li>
            <li><strong>🏠 房间（病位）</strong>——在哪个位置？心肝脾肺肾？卫气营血？从模块一、二中找答案。</li>
          </ul>

          <h3>维修单比喻——就像修东西一样简单</h3>
          <p>
            想象你是一个维修师傅，接到一张报修单。要修好一个东西，你需要搞清楚四个问题：
          </p>
          <div className="bg-ink-50 rounded-lg p-4 my-4">
            <ol className="space-y-3">
              <li><strong>什么东西坏了？</strong>（宝贝）——是水管（血）坏了？还是电线（气）坏了？还是总开关（阳）坏了？</li>
              <li><strong>在哪个房间坏的？</strong>（房间）——厨房（脾）？客厅（肺）？卧室（心）？还是地下室的保险柜（肾）？</li>
              <li><strong>坏成什么样了？</strong>（毛病）——是漏了（虚）？堵了（滞/瘀）？还是烧了（热）？冻了（寒）？</li>
              <li><strong>是谁弄坏的？</strong>（坏蛋）——是外面的坏蛋闯进来的（六淫）？还是家里自己人搞坏的（七情/饮食）？</li>
            </ol>
          </div>
          <p>
            把这四个问题的答案组合在一起，就是<strong>证候诊断</strong>。比如：
          </p>
          <ul>
            <li>"水管（血）在厨房（脾）漏了（虚）" = <strong>脾血虚证</strong></li>
            <li>"电线（气）在客厅（肺）被冻住了（寒）" = <strong>风寒束肺证</strong></li>
            <li>"总电闸（阳）在地下室（肾）没电了（虚）" = <strong>肾阳虚证</strong></li>
            <li>"水管（血）在卧室（心）被火烧干了（热）" = <strong>心火亢盛证</strong></li>
          </ul>
          <p>
            这就是中医辨证的<strong>核心心法</strong>！看似复杂的证候名称，拆开来看不过就是这四个要素的组合。掌握了这个公式，你就可以像玩乐高积木一样，把不同的要素组装成各种证候。
          </p>
        </section>

        {/* ========== sec-m5-2: 六步法 ========== */}
        <section id="sec-m5-2">
          <h2>二、怎么用这个公式？——破案六步法</h2>
          <p>
            知道了公式，下一步就是学会怎么用。我们把辨证过程比作<strong>破案</strong>——你是一个侦探，要通过收集线索、推理分析，最终锁定"真凶"（证候）。整个过程分为六步：
          </p>

          <div className="bg-ink-50 rounded-lg p-4 my-4">
            <h4>第一步 🕵️ 收集线索（望闻问切）</h4>
            <p>
              像侦探收集证据一样，通过四诊收集所有症状和体征：
            </p>
            <ul>
              <li><strong>望诊：</strong>看面色、舌象、形态——舌头胖还是瘦？舌苔白还是黄？面色红润还是苍白？</li>
              <li><strong>闻诊：</strong>听声音、闻气味——说话有气无力还是声音洪亮？口臭还是无味？</li>
              <li><strong>问诊：</strong>问症状、问病史——哪里不舒服？多久了？怕冷还是怕热？想喝水吗？大便怎么样？</li>
              <li><strong>切诊：</strong>切脉、按腹部——脉搏有力还是无力？是浮是沉？是数是迟？腹部有没有压痛点？</li>
            </ul>
          </div>

          <div className="bg-ink-50 rounded-lg p-4 my-4">
            <h4>第二步 🏠 定位房间（判断病位）</h4>
            <p>
              根据症状判断问题出在哪个"房间"：
            </p>
            <ul>
              <li><strong>心：</strong>心悸、失眠、胸闷、舌尖红 → 房间在"心"</li>
              <li><strong>肝：</strong>胁痛、易怒、目眩、脉弦 → 房间在"肝"</li>
              <li><strong>脾：</strong>食少、腹胀、便溏、乏力 → 房间在"脾"</li>
              <li><strong>肺：</strong>咳嗽、气喘、鼻塞、咽痒 → 房间在"肺"</li>
              <li><strong>肾：</strong>腰膝酸软、耳鸣、夜尿多 → 房间在"肾"</li>
              <li><strong>层次：</strong>怕冷发热无汗 → 卫分；高热大渴 → 气分；心烦不寐 → 营分；出血斑疹 → 血分</li>
            </ul>
          </div>

          <div className="bg-ink-50 rounded-lg p-4 my-4">
            <h4>第三步 💎 判断宝贝（确定伤到了什么）</h4>
            <p>
              判断是哪个"宝贝"出了问题：
            </p>
            <ul>
              <li><strong>气：</strong>乏力、气短、自汗、脉弱 → 伤到了"气"</li>
              <li><strong>血：</strong>面色无华、头晕目眩、舌淡、脉细 → 伤到了"血"</li>
              <li><strong>阴：</strong>潮热盗汗、五心烦热、舌红少苔 → 伤到了"阴"</li>
              <li><strong>阳：</strong>畏寒肢冷、腰膝冷痛、舌淡胖 → 伤到了"阳"</li>
              <li><strong>精：</strong>生长发育迟缓、早衰、不孕不育 → 伤到了"精"</li>
              <li><strong>津液：</strong>口干咽燥、皮肤干燥、大便干结 → 伤到了"津液"</li>
            </ul>
          </div>

          <div className="bg-ink-50 rounded-lg p-4 my-4">
            <h4>第四步 🔧 确定毛病（判断病性）</h4>
            <p>
              判断出了什么"毛病"：
            </p>
            <ul>
              <li><strong>虚：</strong>不足、衰退、无力 → 虚证（气虚、血虚、阴虚、阳虚）</li>
              <li><strong>实/盛：</strong>亢盛、过剩、有力 → 实证（热、寒、湿、燥、火）</li>
              <li><strong>滞：</strong>不通畅、堵住了 → 气滞、湿滞</li>
              <li><strong>瘀：</strong>血液停滞 → 血瘀</li>
              <li><strong>逆：</strong>该降的反而往上 → 气逆（胃气上逆、肝气上逆）</li>
              <li><strong>郁/束：</strong>被关住了出不来 → 阳气郁结、肺气被束</li>
            </ul>
          </div>

          <div className="bg-ink-50 rounded-lg p-4 my-4">
            <h4>第五步 🦠 揪出坏蛋（判断病因）</h4>
            <p>
              找到是谁在捣乱：
            </p>
            <ul>
              <li><strong>六淫：</strong>风、寒、暑、湿、燥、火（外来的坏蛋）</li>
              <li><strong>七情：</strong>怒、喜、思、悲、恐、惊（家里自己的情绪问题）</li>
              <li><strong>饮食：</strong>暴饮暴食、过食生冷、过食辛辣</li>
              <li><strong>劳倦：</strong>过度劳累、过度安逸</li>
              <li><strong>内生病邪：</strong>痰、饮、瘀血、食积、气滞</li>
            </ul>
          </div>

          <div className="bg-ink-50 rounded-lg p-4 my-4">
            <h4>第六步 🧩 组装（得出证候名称）</h4>
            <p>
              把以上五步的结果组装起来，按照公式得到证候名称：
            </p>
            <p className="font-bold text-center text-lg text-ink-700 my-4">
              证候 = 坏蛋（病因） × 毛病（病性） × 宝贝（气血阴阳） × 房间（病位）
            </p>
            <p>
              证候的命名规则通常是：<strong>"病因 + 病性 + 病位"</strong>或<strong>"病位 + 病性"</strong>。
            </p>
            <ul>
              <li>风寒束肺证 = 风寒（坏蛋） × 束（毛病） × 气（宝贝） × 肺（房间）</li>
              <li>心脾两虚证 = 思虑（坏蛋） × 虚（毛病） × 血+气（宝贝） × 心+脾（房间）</li>
              <li>肾阴虚证 = 久病（坏蛋） × 虚（毛病） × 阴（宝贝） × 肾（房间）</li>
              <li>肝气郁结证 = 怒（坏蛋） × 滞+逆（毛病） × 气（宝贝） × 肝（房间）</li>
            </ul>
          </div>

          <blockquote>
            <p>
              <strong>核心心法：</strong>这六步不是死板的流程，而是一种灵活的思维模式。熟练之后，你会发现自己在诊断时自然地在四要素之间来回切换。就像老侦探破案——线索越多，推理越快，结论越准。
            </p>
          </blockquote>
        </section>

        {/* ========== sec-m5-3: 实例演示 ========== */}
        <section id="sec-m5-3">
          <h2>三、实例演示——四步拆解真实病案</h2>
          <p>
            理论学习完了，现在来看看真实的病案是怎么用这个公式的。以下是四个典型的临床案例，带你走一遍完整的辨证过程。
          </p>

          <h3>实例一：风寒感冒——风寒束表证</h3>
          <div className="bg-ink-50 rounded-lg p-4 my-4">
            <h4>病案</h4>
            <p>
              小王昨天淋了一场大雨，今天起来浑身不舒服。他感觉<strong>怕冷得很厉害</strong>，穿上厚衣服还是冷，<strong>一点汗都没有</strong>，<strong>头很痛</strong>，<strong>脖子和后背僵硬</strong>，<strong>鼻塞流清涕</strong>，<strong>咳嗽痰白稀</strong>。看看舌头——<strong>舌淡红、苔薄白</strong>。摸摸脉搏——<strong>脉浮紧</strong>。
            </p>

            <h4>四步拆解</h4>
            <table>
              <thead>
                <tr>
                  <th>步骤</th>
                  <th>线索</th>
                  <th>判断</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>哪坏了？</strong></td>
                  <td>怕冷无汗、头身痛、鼻塞咳嗽</td>
                  <td>表面皮肤和呼吸道（卫分）</td>
                </tr>
                <tr>
                  <td><strong>什么宝贝？</strong></td>
                  <td>怕冷——阳气被堵住了</td>
                  <td>气（卫气被郁）</td>
                </tr>
                <tr>
                  <td><strong>什么毛病？</strong></td>
                  <td>怕冷、无汗、脉紧→被"冻住"了</td>
                  <td>滞/束（卫气被寒邪束缚）</td>
                </tr>
                <tr>
                  <td><strong>谁捣乱？</strong></td>
                  <td>淋雨受凉、怕冷重、流清涕</td>
                  <td>风+寒（外感风寒）</td>
                </tr>
              </tbody>
            </table>

            <h4>组装结果</h4>
            <p className="font-bold text-center text-lg text-ink-700">
              风寒（坏蛋） × 束（毛病） × 气（宝贝） × 卫分+肺（房间） = <strong>风寒束表证</strong>
            </p>
            <p>
              治疗用<strong>麻黄汤</strong>或<strong>荆防败毒散</strong>，发汗解表——把冻住的门窗打开，把寒气赶出去。
            </p>
          </div>

          <h3>实例二：心脾两虚——失眠健忘</h3>
          <div className="bg-ink-50 rounded-lg p-4 my-4">
            <h4>病案</h4>
              <p>
              李阿姨最近半年总是<strong>睡不好觉</strong>，躺在床上翻来覆去睡不着，睡着了也多梦易醒。白天<strong>心慌心悸</strong>、<strong>记性很差</strong>，刚放下的东西就忘了在哪。同时她还<strong>胃口不好</strong>，吃一点点就腹胀，<strong>浑身没劲</strong>，<strong>脸色发黄没有光泽</strong>。看看舌头——<strong>舌淡、苔薄白</strong>。摸摸脉搏——<strong>脉细弱</strong>。
            </p>

            <h4>四步拆解</h4>
            <table>
              <thead>
                <tr>
                  <th>步骤</th>
                  <th>线索</th>
                  <th>判断</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>哪坏了？</strong></td>
                  <td>心慌失眠+胃口差腹胀</td>
                  <td>心+脾（两个房间）</td>
                </tr>
                <tr>
                  <td><strong>什么宝贝？</strong></td>
                  <td>心悸面色无华→血虚；乏力脉弱→气虚</td>
                  <td>血+气（两个宝贝都伤了）</td>
                </tr>
                <tr>
                  <td><strong>什么毛病？</strong></td>
                  <td>各种不足的表现</td>
                  <td>虚（气血亏虚）</td>
                </tr>
                <tr>
                  <td><strong>谁捣乱？</strong></td>
                  <td>思虑过度、操劳</td>
                  <td>思虑/劳倦（情绪+劳累）</td>
                </tr>
              </tbody>
            </table>

            <h4>组装结果</h4>
            <p className="font-bold text-center text-lg text-ink-700">
              思虑×劳倦（坏蛋） × 虚（毛病） × 血+气（宝贝） × 心+脾（房间） = <strong>心脾两虚证</strong>
            </p>
            <p>
              治疗用<strong>归脾汤</strong>——健脾养心、补益气血。把厨房（脾）修好，让营养能上去，卧室（心）的灯就能亮起来。
            </p>
          </div>

          <h3>实例三：肝气犯胃——胃痛胸闷</h3>
          <div className="bg-ink-50 rounded-lg p-4 my-4">
            <h4>病案</h4>
            <p>
              老张是个急脾气，最近和邻居吵架后开始<strong>胃胀胃痛</strong>，痛得连饭都吃不下去，<strong>两胁也胀痛</strong>，<strong>经常打嗝</strong>，打完嗝稍微舒服一点，但过一会儿又胀了。他还感觉<strong>胸口堵得慌</strong>，<strong>嘴里发苦</strong>，动不动就想<strong>叹气</strong>。看看舌头——<strong>舌淡红、苔薄黄</strong>。摸摸脉搏——<strong>脉弦</strong>。
            </p>

            <h4>四步拆解</h4>
            <table>
              <thead>
                <tr>
                  <th>步骤</th>
                  <th>线索</th>
                  <th>判断</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>哪坏了？</strong></td>
                  <td>胁胀+胃痛</td>
                  <td>肝+胃（肝气横逆犯胃）</td>
                </tr>
                <tr>
                  <td><strong>什么宝贝？</strong></td>
                  <td>胀痛打嗝——气堵住了</td>
                  <td>气（气机运行失常）</td>
                </tr>
                <tr>
                  <td><strong>什么毛病？</strong></td>
                  <td>胀满不通+打嗝上逆</td>
                  <td>滞（气滞）+逆（气逆）</td>
                </tr>
                <tr>
                  <td><strong>谁捣乱？</strong></td>
                  <td>吵架后发病</td>
                  <td>怒（情绪引发）</td>
                </tr>
              </tbody>
            </table>

            <h4>组装结果</h4>
            <p className="font-bold text-center text-lg text-ink-700">
              怒（坏蛋） × 滞+逆（毛病） × 气（宝贝） × 肝+胃（房间） = <strong>肝气犯胃证</strong>
            </p>
            <p>
              治疗用<strong>柴胡疏肝散</strong>或<strong>逍遥散</strong>加减——疏肝理气、和胃降逆。把将军（肝）的火气降下来，厨房（胃）就能恢复正常工作了。
            </p>
          </div>

          <h3>实例四：湿困脾胃——浑身沉重</h3>
          <div className="bg-ink-50 rounded-lg p-4 my-4">
            <h4>病案</h4>
            <p>
              小赵最近总觉得<strong>身体沉重</strong>，像穿了一件湿衣服一样，<strong>头昏昏沉沉</strong>像裹了块布，<strong>不想吃饭</strong>，吃一点点就<strong>腹胀</strong>，<strong>大便稀溏黏腻</strong>，冲都冲不干净。他平时喜欢<strong>喝冷饮、吃甜食</strong>。看看舌头——<strong>舌淡胖、苔白腻</strong>。摸摸脉搏——<strong>脉濡缓</strong>。
            </p>

            <h4>四步拆解</h4>
            <table>
              <thead>
                <tr>
                  <th>步骤</th>
                  <th>线索</th>
                  <th>判断</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>哪坏了？</strong></td>
                  <td>食欲差腹胀+大便稀</td>
                  <td>脾+胃（消化系统被"泡"住了）</td>
                </tr>
                <tr>
                  <td><strong>什么宝贝？</strong></td>
                  <td>气机被湿气阻滞</td>
                  <td>气（运化功能受损）</td>
                </tr>
                <tr>
                  <td><strong>什么毛病？</strong></td>
                  <td>粘滞沉重</td>
                  <td>滞（气机被湿邪阻滞）</td>
                </tr>
                <tr>
                  <td><strong>谁捣乱？</strong></td>
                  <td>喝冷饮吃甜食+苔白腻</td>
                  <td>湿（外湿+内湿）</td>
                </tr>
              </tbody>
            </table>

            <h4>组装结果</h4>
            <p className="font-bold text-center text-lg text-ink-700">
              湿（坏蛋） × 滞（毛病） × 气（宝贝） × 脾+胃（房间） = <strong>湿困脾胃证</strong>
            </p>
            <p>
              治疗用<strong>藿香正气散</strong>或<strong>平胃散</strong>——芳香化湿、健脾和胃。把厨房里的"积水"抽干，再把门窗打开通风，湿气自然就散了。
            </p>
          </div>

          <blockquote>
            <p>
              <strong>核心心法：</strong>看到没有？四个完全不同的病（感冒、失眠、胃痛、沉重），用同一个公式拆解，都变得清清楚楚。这就是中医辨证的魅力——不管症状多复杂，套用这个公式就能化繁为简。当你熟练掌握后，你会在头脑中自动把每个病人拆解成这四个要素。
            </p>
          </blockquote>
        </section>

        {/* ========== sec-m5-4: 常见证候拆解 ========== */}
        <section id="sec-m5-4">
          <h2>四、常见证候拆解——实战分类</h2>
          <p>
            为了帮助你更快上手，我们把临床上最常见的证候按类别整理好，每个证候都拆解成四要素，方便你参考和记忆。
          </p>

          <h3>虚证类——"宝贝不够了"</h3>
          <p>
            虚证的本质是<strong>正气不足</strong>——身体里的某种"宝贝"（气、血、阴、阳）不够用了。就像手机的电池电量不足，运行缓慢、功能下降。
          </p>
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>证候名称</th>
                  <th>🦠 坏蛋</th>
                  <th>🔧 毛病</th>
                  <th>💎 宝贝</th>
                  <th>🏠 房间</th>
                  <th>核心表现</th>
                  <th>公式</th>
                </tr>
              </thead>
              <tbody>
                {deficiencyData.map((item) => (
                  <tr key={item.name}>
                    <td className="font-bold">{item.name}</td>
                    <td>{item.bad}</td>
                    <td>{item.fault}</td>
                    <td>{item.treasure}</td>
                    <td>{item.room}</td>
                    <td>{item.symptom}</td>
                    <td><code className="text-xs">{item.formula}</code></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-ink-50 rounded-lg p-4 my-4">
            <p className="mb-2">
              <strong>虚证组装修辞：</strong>
            </p>
            <ul>
              <li><strong>心气虚</strong>——总指挥部的对讲机（气）没电了，命令传达不力，所以心慌气短</li>
              <li><strong>心血虚</strong>——总指挥部的文件柜（血）空了，资料不全，所以失眠健忘</li>
              <li><strong>脾气虚</strong>——厨房的燃气（气）不足了，饭菜做不熟、送不出去，所以食少腹胀乏力</li>
              <li><strong>肝血虚</strong>——调度中心的账本（血）被烧了，看不清数据，所以头晕目眩、视力模糊</li>
              <li><strong>肾阳虚</strong>——总电闸（阳）的保险丝熔断了，全屋供暖不足，所以腰膝冷痛、怕冷</li>
              <li><strong>肾阴虚</strong>——总电闸的冷却液（阴）漏光了，机器干烧发热，所以潮热盗汗</li>
            </ul>
          </div>

          <h3>实证类——"坏蛋太嚣张了"</h3>
          <p>
            实证的本质是<strong>邪气亢盛</strong>——外来的坏蛋太厉害了，或者体内产生了太多"垃圾"。正邪双方打得激烈，所以症状通常比较明显、剧烈。
          </p>
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>证候名称</th>
                  <th>🦠 坏蛋</th>
                  <th>🔧 毛病</th>
                  <th>💎 宝贝</th>
                  <th>🏠 房间</th>
                  <th>核心表现</th>
                  <th>公式</th>
                </tr>
              </thead>
              <tbody>
                {excessData.map((item) => (
                  <tr key={item.name}>
                    <td className="font-bold">{item.name}</td>
                    <td>{item.bad}</td>
                    <td>{item.fault}</td>
                    <td>{item.treasure}</td>
                    <td>{item.room}</td>
                    <td>{item.symptom}</td>
                    <td><code className="text-xs">{item.formula}</code></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-ink-50 rounded-lg p-4 my-4">
            <p className="mb-2">
              <strong>实证组装修辞：</strong>
            </p>
            <ul>
              <li><strong>肝气郁结</strong>——调度中心（肝）的电话线（气）打结了，命令传不出去，所以胁痛抑郁</li>
              <li><strong>寒湿困脾</strong>——厨房（脾）被冰水泡了，灶台点不着火，食物做不熟，所以腹胀便溏</li>
              <li><strong>胃热炽盛</strong>——厨房（胃）的灶台火开太大了，锅都烧干了，所以胃痛口臭、牙龈肿</li>
            </ul>
          </div>

          <h3>虚实夹杂类——"又有坏蛋、又缺宝贝"</h3>
          <p>
            临床上最复杂也最常见的情况——<strong>既有邪气实，又有正气虚</strong>。就像家里既进了小偷（实），又偏偏保险柜里没什么值钱的东西（虚）。治疗这类证候要"攻补兼施"——既要赶走坏蛋，又要补充宝贝。
          </p>
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>证候名称</th>
                  <th>🦠 坏蛋</th>
                  <th>🔧 毛病</th>
                  <th>💎 宝贝</th>
                  <th>🏠 房间</th>
                  <th>核心表现</th>
                  <th>公式</th>
                </tr>
              </thead>
              <tbody>
                {mixedData.map((item) => (
                  <tr key={item.name}>
                    <td className="font-bold">{item.name}</td>
                    <td>{item.bad}</td>
                    <td>{item.fault}</td>
                    <td>{item.treasure}</td>
                    <td>{item.room}</td>
                    <td>{item.symptom}</td>
                    <td><code className="text-xs">{item.formula}</code></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-ink-50 rounded-lg p-4 my-4">
            <p className="mb-2">
              <strong>虚实夹杂组装修辞：</strong>
            </p>
            <ul>
              <li><strong>肝郁脾虚</strong>——调度中心（肝）的电话线打结了（实），同时厨房（脾）的燃气不足（虚）——既需要疏通电话线，又要补充燃气</li>
              <li><strong>气虚血瘀</strong>——总水压（气）不够了（虚），水管里的脏东西沉积下来堵塞了管道（实）——既要加大水压冲走堵塞，又要清堵</li>
            </ul>
          </div>

          <h3>外感类——"外来坏蛋入侵"</h3>
          <p>
            外感类证候是六淫（外来坏蛋）从体表入侵引起的。这类证候<strong>起病急、变化快</strong>，是中医辨证中最常见的一类。掌握了外感证的拆解方法，感冒发烧就能自己判断了。
          </p>
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>证候名称</th>
                  <th>🦠 坏蛋</th>
                  <th>🔧 毛病</th>
                  <th>💎 宝贝</th>
                  <th>🏠 房间</th>
                  <th>核心表现</th>
                  <th>公式</th>
                </tr>
              </thead>
              <tbody>
                {externalData.map((item) => (
                  <tr key={item.name}>
                    <td className="font-bold">{item.name}</td>
                    <td>{item.bad}</td>
                    <td>{item.fault}</td>
                    <td>{item.treasure}</td>
                    <td>{item.room}</td>
                    <td>{item.symptom}</td>
                    <td><code className="text-xs">{item.formula}</code></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-ink-50 rounded-lg p-4 my-4">
            <p className="mb-2">
              <strong>外感组装修辞：</strong>
            </p>
            <ul>
              <li><strong>风热犯肺</strong>——热风从窗户（鼻/口）吹进了客厅（肺），把客厅搞得又热又燥——需要开窗散热、清肺热</li>
              <li><strong>风寒束肺</strong>——冷风从门缝钻进来，把客厅（肺）的门窗都冻住了——需要开门烧暖气、散寒解表</li>
            </ul>
          </div>

          <blockquote>
            <p>
              <strong>终极心法：</strong>证候 = 坏蛋（病因） × 毛病（病性） × 宝贝（气血阴阳） × 房间（病位）。这个公式就是你辨证的<strong>终极武器</strong>！不管遇到多复杂的病症，只要冷静地把这四个要素一个个分析出来，然后组装在一起——你就完成了中医辨证的核心步骤。初学者可以从单要素证候开始练习（如风寒束表），慢慢过渡到多要素证候（如心脾两虚）。多练习、多分析，你的"辨证之眼"会越来越锐利。记住——<strong>每一个证候背后，都有一个清晰的逻辑链条。</strong>
            </p>
          </blockquote>
        </section>
      </div>
    </div>
  )
}