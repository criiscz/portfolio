/**
* function adapted from @camwiegert/typical (https://github.com/camwiegert/typical)
*/

interface Type  {
  node: Node | null;
  args: [string | number]
  text: any
}

export async function type(node: Type["node"], ...args: any) {
  for (const arg of args) {
    switch (typeof arg) {
      case 'string':
        await edit(node, arg);
        break;
      case 'number':
        await wait(arg);
        break;
      case 'function':
        // @ts-ignore
        await arg(node, ...args);
        break;
      default:
        await arg;
    }
  }
}

async function edit(node:Type["node"], text:Type["text"]) {
  // @ts-ignore
  const overlap = getOverlap(node.textContent, text);
  // @ts-ignore
  await perform(node, [...deleter(node.textContent, overlap), ...writer(text, overlap)]);
}

async function wait(ms:number) {
  await new Promise(resolve => setTimeout(resolve, ms));
}

async function perform(node:Type["node"], edits:string[], speed = 60) {
  // @ts-ignore
  for (const op of editor(edits)) {
    op(node);
    await wait(speed + speed * (Math.random() - 0.5));
  }
}

export function* editor(edits:string[]){
  for (const edit of edits) {
    // @ts-ignore
    yield (node:Type["node"]) => requestAnimationFrame(() => node.textContent = edit);
  }
}

export function* writer([...text], startIndex = 0, endIndex = text.length) {
  while (startIndex < endIndex) {
    yield text.slice(0, ++startIndex).join('');
  }
}

export function* deleter([...text], startIndex = 0, endIndex = text.length) {
  while (endIndex > startIndex) {
    yield text.slice(0, --endIndex).join('');
  }
}

export function getOverlap(start:any, [...end]) {
  return [...start, NaN].findIndex((char, i) => end[i] !== char);
}