// 生成嵌入代码的工具脚本
// 运行此脚本将生成可嵌入的JavaScript代码

// 默认武器数据
const defaultWeapons = [
    {
        name: "幽冥毒皇",
        id: "3D8E7E95CD7FCFF84D00D4B7",
        skin: "",
        function: "无限榴弹",
        type: "主枪械",
        fullText: "幽冥毒皇-3D8E7E95CD7FCFF84D00D4B7                           无限榴弹",
        copyText: "幽冥毒皇-3D8E7E95CD7FCFF84D00D4B7",
        description: "幽冥毒皇是一把强大的主枪械，配备无限榴弹功能，适合在各种战斗场景中使用。其独特的毒素效果能够对敌人造成持续伤害。"
    },
    {
        name: "精绝兽神",
        id: "99AFD37F5B5AF2AB1E7DC76F",
        skin: "精绝冰骸",
        function: "打boss",
        type: "主枪械",
        fullText: "精绝兽神-精绝冰骸-99AFD37F5B5AF2AB1E7DC76F          打boss",
        copyText: "精绝兽神-精绝冰骸-99AFD37F5B5AF2AB1E7DC76F",
        description: "精绝兽神的精绝冰骸皮肤不仅外观炫酷，更是打boss的利器。其高伤害和精准度能够快速击败强大的敌人。"
    },
    {
        name: "死神猎手",
        id: "24CA15C1B1DD86FA43149F51",
        skin: "眩紫狂潮",
        function: "打boss",
        type: "主枪械",
        fullText: "死神猎手-眩紫狂潮-24CA15C1B1DD86FA43149F51         打boss",
        copyText: "死神猎手-眩紫狂潮-24CA15C1B1DD86FA43149F51",
        description: "死神猎手的眩紫狂潮皮肤提供了出色的视觉效果和强大的战斗力，特别适合挑战各种强大的boss。"
    },
    {
        name: "死神猎手",
        id: "33A405EA511BF7022A837246",
        skin: "幽航猎影",
        function: "破盾刷钱",
        type: "主枪械",
        fullText: "死神猎手-幽航猎影-33A405EA511BF7022A837246          破盾刷钱",
        copyText: "死神猎手-幽航猎影-33A405EA511BF7022A837246",
        description: "死神猎手的幽航猎影皮肤不仅外观独特，还具备破盾和刷钱的特殊能力，是游戏中赚钱和快速清理敌人的理想选择。"
    }
];

// 生成嵌入代码
const embedCode = `// 逆战未来枪械数据 - 自动生成的嵌入代码
// 生成时间: ${new Date().toLocaleString('zh-CN')}
// 武器数量: ${defaultWeapons.length}

if (!localStorage.getItem('weapons')) {
    const defaultWeapons = ${JSON.stringify(defaultWeapons, null, 4)};
    localStorage.setItem('weapons', JSON.stringify(defaultWeapons));
    console.log('已加载默认武器数据 (${defaultWeapons.length}个武器)');
}`;

// 输出嵌入代码
console.log("=== 嵌入代码开始 ===");
console.log(embedCode);
console.log("=== 嵌入代码结束 ===");

// 保存到文件
const fs = require('fs');
fs.writeFileSync('embed-code.txt', embedCode);
console.log('嵌入代码已保存到 embed-code.txt 文件');