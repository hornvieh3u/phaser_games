var mov = [
    { name: 'stance', frame: { start: 10142, end: 10147, frameRate: 8, repeat: -1 } },
    { name: 'walkf', frame: { start: 10153, end: 10161, frameRate: 12, repeat: -1 }, speed: 150 },
    { name: 'walkb', frame: { start: 10161, end: 10153, frameRate: 12, repeat: -1 }, speed: 100 },
    { name: 'jump', frame: { start: 10170, end: 10177, frameRate: 8, repeat: 0 }, speedY: 350 },
    { name: 'jumpf', frame: { start: 10209, end: 10211, frameRate: 8, repeat: -1 }, speedX: 150, speedY: 340 },
    { name: 'jumpb', frame: { start: 10209, end: 10211, frameRate: 8, repeat: -1 }, speedX: 150, speedY: 340 },
    { name: 'dashf', frame: { start: 10195, end: 10200, frameRate: 12, repeat: 0 }, speed: 220, fx: { name: 'ground-dust', x: -80, y: 5 } },
    { name: 'dashb', frame: { start: 10406, end: 10409, frameRate: 12, repeat: 0 }, speed: 160, fx: { name: 'ground-dust', x: -80, y: 5 } },
    { name: 'crouch', frame: { start: 10147, end: 10151, frameRate: 6, repeat: -1 }, speed: 0, hurtbox: { x: 0, y: 20, width: 40, height: 60 } },
    { name: 'blockh', frame: { start: 10191, end: 10192, frameRate: 6, repeat: 0 }, speed: 0, noFrames: 5 },
    { name: 'hith', frame: { start: 10568, end: 10571, frameRate: 8, repeat: 0 }, speed: 0 },
]
var atk = [
    { name: 'slp', frame: { start: 10410, end: 10413, frameRate: 12, repeat: 0 }, speed: 0, hitbox: { fx: { name: 'hitsparks-small', x: 50, y: -20 }, start: 1, active: 2, hits: [3], x: 50, y: -20, width: 50, height: 20, damage: 30, stun: 10, onBlk: 2, onHit: 4, push: 15, atklvl: 'h' } },
    { name: 'smp', frame: { start: 10420, end: 10423, frameRate: 10, repeat: 0 }, speed: 0,  hitbox: { fx: { name: 'hitsparks-small', x: 50, y: -20 }, start: 1, active: 2, hits: [3], x: 50, y: -20, width: 50, height: 20, damage: 30, stun: 10, onBlk: 2, onHit: 4, push: 15, atklvl: 'h' } },
    { name: 'shp', frame: { start: 10396, end: 10399, frameRate: 10, repeat: 0 }, speed: 0, hitbox: { fx: { name: 'hitsparks-fireball', x: 20, y: -20 }, start: 3, active: 4, hits: [5], x: 50, y: -30, width: 60, height: 20, damage: 70, stun: 20, onBlk: 1, onHit: 8, push: 10, atklvl: 'h' } },
    { name: 'slk', frame: { start: 10414, end: 10416, frameRate: 6, repeat: 0 }, speed: 0, hitbox: { fx: { name: 'hitsparks-small', x: 20, y: 0 }, start: 1, active: 2, hits: [3], x: 50, y: 25, width: 60, height: 20, damage: 30, stun: 10, onBlk: 1, onHit: 4, push: 10, atklvl: 'h' } },
    { name: 'smk', frame: { start: 10410, end: 10413, frameRate: 8, repeat: 0 }, speed: 0,  hitbox: { fx: { name: 'hitsparks-small', x: 50, y: -20 }, start: 1, active: 2, hits: [3], x: 50, y: 0, width: 50, height: 20, damage: 30, stun: 10, onBlk: 2, onHit: 4, push: 15, atklvl: 'h' } },
    { name: 'shk', frame: { start: 10142, end: 10152, frameRate: 16, repeat: 0 }, speed: 0, hitbox: { fx: { name: 'hitsparks-fireball', x: 20, y: -30 }, start: 3, active: 5, hits: [6], x: 50, y: -25, width: 80, height: 30, damage: 70, stun: 20, onBlk: 4, onHit: 10, push: 5, atklvl: 'h' } },
    { name: 'clp', frame: { start: 10142, end: 10152, frameRate: 18, repeat: 0 }, speed: 0, hitbox: { fx: { name: 'hitsparks-small', x: 20, y: -20 }, start: 1, active: 2, hits: [3], x: 50, y: -20, width: 50, height: 20, damage: 30, stun: 10, onBlk: 2, onHit: 4, push: 15, atklvl: 'h' } },
    { name: 'cmp', frame: { start: 10142, end: 10152, frameRate: 14, repeat: 0 }, speed: 0, hitbox: { fx: { name: 'hitsparks-small', x: 20, y: -20 }, start: 2, active: 3, hits: [5], x: 50, y: -20, width: 60, height: 20, damage: 50, stun: 15, onBlk: 1, onHit: 6, push: 15, atklvl: 'h' } },
    { name: 'chp', frame: { start: 10142, end: 10152, frameRate: 14, repeat: 0 }, speed: 0, hitbox: { fx: { name: 'hitsparks-fireball', x: 20, y: -20 }, start: 2, active: 4, hits: [3], x: 50, y: -30, width: 60, height: 20, damage: 70, stun: 20, onBlk: 1, onHit: 8, push: 10, atklvl: 'h' } },
    { name: 'clk', frame: { start: 10142, end: 10152, frameRate: 18, repeat: 0 }, speed: 0, hitbox: { fx: { name: 'hitsparks-small', x: 20, y: 0 }, start: 1, active: 2, hits: [3], x: 50, y: 25, width: 60, height: 20, damage: 30, stun: 10, onBlk: 1, onHit: 4, push: 10, atklvl: 'h' } },
    { name: 'cmk', frame: { start: 10142, end: 10152, frameRate: 12, repeat: 0 }, speed: 0, hitbox: { fx: { name: 'hitsparks-small', x: 20, y: 0 }, start: 3, active: 2, hits: [5], x: 60, y: 0, width: 70, height: 20, damage: 50, stun: 15, onBlk: 1, onHit: 4, push: 10, atklvl: 'h' } },
    { name: 'chk', frame: { start: 10142, end: 10152, frameRate: 16, repeat: 0 }, speed: 0, hitbox: { fx: { name: 'hitsparks-fireball', x: 20, y: -30 }, start: 3, active: 5, hits: [6], x: 50, y: -25, width: 80, height: 30, damage: 70, stun: 20, onBlk: 4, onHit: 10, push: 5, atklvl: 'h' } },
    { name: 'jlp', frame: { start: 10142, end: 10152, frameRate: 10, repeat: 0 }, speed: 100, hitbox: { fx: { name: 'hitsparks-small', x: 20, y: -20 }, start: 1, active: 2, hits: [3], x: 50, y: -20, width: 50, height: 20, damage: 30, stun: 10, onBlk: 2, onHit: 4, push: 15, atklvl: 'h' } },
    { name: 'jmp', frame: { start: 10142, end: 10152, frameRate: 10, repeat: 0 }, speed: 100, hitbox: { fx: { name: 'hitsparks-small', x: 20, y: -20 }, start: 2, active: 3, hits: [5], x: 50, y: -30, width: 60, height: 20, damage: 50, stun: 15, onBlk: 1, onHit: 6, push: 15, atklvl: 'h' } },
    { name: 'jhp', frame: { start: 10142, end: 10152, frameRate: 10, repeat: 0 }, speed: 100, hitbox: { fx: { name: 'hitsparks-fireball', x: 20, y: -20 }, start: 2, active: 4, hits: [5], x: 50, y: 0, width: 60, height: 30, damage: 70, stun: 20, onBlk: 1, onHit: 8, push: 10, atklvl: 'h' } },
    { name: 'jlk', frame: { start: 10142, end: 10152, frameRate: 18, repeat: 0 }, speed: 0, hitbox: { fx: { name: 'hitsparks-small', x: 20, y: 0 }, start: 1, active: 2, hits: [3], x: 50, y: 25, width: 60, height: 20, damage: 30, stun: 10, onBlk: 1, onHit: 4, push: 10, atklvl: 'h' } },
    { name: 'jmk', frame: { start: 10142, end: 10152, frameRate: 12, repeat: 0 }, speed: 0, hitbox: { fx: { name: 'hitsparks-small', x: 20, y: 0 }, start: 3, active: 2, hits: [5], x: 60, y: 0, width: 70, height: 20, damage: 50, stun: 15, onBlk: 1, onHit: 4, push: 10, atklvl: 'h' } },
    { name: 'jhk', frame: { start: 10142, end: 10152, frameRate: 16, repeat: 0 }, speed: 0, hitbox: { fx: { name: 'hitsparks-fireball', x: 20, y: -30 }, start: 3, active: 5, hits: [6], x: 50, y: -25, width: 80, height: 30, damage: 70, stun: 20, onBlk: 4, onHit: 10, push: 5, atklvl: 'h' } },
]
var cricarts = [
    { name: 'ca1', frame: { start: 3427, end: 3434, frameRate: 12, repeat: -1 }, speed: 0, hitbox: { fx: { name: 'hitsparks-fireball', x: 20, y: -30 }, start: 3, active: 5, hits: [6], x: 50, y: -25, width: 80, height: 30, damage: 70, stun: 20, onBlk: 4, onHit: 10, push: 5, atklvl: 'h' } },
]

var projectiles = [
    { name: 'lfbf', fx: { name: 'hitsparks-fireball', x: 80, y: 0 }, speed: 220, x: 55, y: -15, texture: 'fireballs-white', hitbox: { hits: [5], damage: 50, stun: 50, onBlk: 1, onHit: 4, push: 5, atklvl: 'h' } },
    { name: 'mfbf', fx: { name: 'hitsparks-fireball', x: 80, y: 0 }, speed: 260, x: 55, y: -15, texture: 'fireballs-white', hitbox: { hits: [5], damage: 50, stun: 50, onBlk: 2, onHit: 4, push: 10, atklvl: 'h' } },
    { name: 'hfbf', fx: { name: 'hitsparks-fireball', x: 80, y: 0 }, speed: 300, x: 55, y: -15, texture: 'fireballs-white', hitbox: { hits: [5], damage: 50, stun: 50, onBlk: 4, onHit: 4, push: 12, atklvl: 'h' } }
]
var spmoves = [
    { name: 'lfbf', speed: 0, fx: { name: 'ground-dust', x: -80, y: 5 }, frame: { start: 10142, end: 10152, frameRate: 18, repeat: 0 }, output: projectiles.filter(function(a){ return a.name == 'lfbf'})},
    { name: 'mfbf', speed: 0, fx: { name: 'ground-dust', x: -80, y: 5 }, frame: { start: 10142, end: 10152, frameRate: 14, repeat: 0 }, output: projectiles.filter(function(a){ return a.name == 'mfbf'})},
    { name: 'hfbf', speed: 0, fx: { name: 'ground-dust', x: -80, y: 5 }, frame: { start: 10142, end: 10152, frameRate: 12, repeat: 0 }, output: projectiles.filter(function(a){ return a.name == 'hfbf'})},
    { name: 'ltatf', speed: 100, fx: { name: 'ground-dust', x: -80, y: 5 }, frame: { start: 10142, end: 10152, frameRate: 18, repeat: 0 }, hitbox: { fx: { name: 'hitsparks-small', x: 0, y: 0 }, start: 3, active: 2, hits: [5], x: 60, y: 0, width: 70, height: 20, damage: 50, stun: 15, onBlk: 1, onHit: 4, push: 5, atklvl: 'h' } },
    { name: 'mtatf', speed: 200, fx: { name: 'ground-dust', x: -80, y: 5 }, frame: { start: 10142, end: 10152, frameRate: 14, repeat: 0 }, hitbox: { fx: { name: 'hitsparks-small', x: 0, y: 0 }, start: 4, active: 4, hits: [6,7], x: 60, y: 0, width: 70, height: 20, damage: 50, stun: 15, onBlk: 1, onHit: 4, push: 5, atklvl: 'h' } },
    { name: 'htatf', speed: 300, fx: { name: 'ground-dust', x: -80, y: 5 }, frame: { start: 10142, end: 10152, frameRate: 10, repeat: 0 }, hitbox: { fx: { name: 'hitsparks-small', x: 0, y: 0 }, start: 5, active: 6, hits: [7,8,9], x: 60, y: 0, width: 70, height: 20, damage: 50, stun: 15, onBlk: 1, onHit: 4, push: 5, atklvl: 'h' } },
    { name: 'ldpf', speed: 5, height: 200, fx: { name: 'ground-dust', x: -80, y: 5 }, frame: { start: 10142, end: 10152, frameRate: 20, repeat: 0 }, hitbox: { fx: { name: 'hitsparks-small', x: -40, y: -20 }, start: 3, active: 3, hits: [5], x: 20, y: -20, width: 55, height: 60, damage: 50, stun: 15, onBlk: 1, onHit: 4, push: 5, atklvl: 'h' } },
    { name: 'mdpf', speed: 10, height: 260, fx: { name: 'ground-dust', x: -80, y: 5 }, frame: { start: 10142, end: 10152, frameRate: 16, repeat: 0 }, hitbox: { fx: { name: 'hitsparks-small', x: -20, y: -20 }, start: 4, active: 4, hits: [5], x: 20, y: -20, width: 50, height: 70, damage: 50, stun: 15, onBlk: 1, onHit: 4, push: 5, atklvl: 'h' } },
    { name: 'hdpf', speed: 15, height: 320, fx: { name: 'ground-dust', x: -80, y: 5 }, frame: { start: 10142, end: 10152, frameRate: 12, repeat: 0 }, hitbox: { fx: { name: 'hitsparks-small', x: -20, y: -20 }, start: 5, active: 6, hits: [5,7], x: 20, y: -20, width: 55, height: 80, damage: 50, stun: 15, onBlk: 1, onHit: 4, push: 5, atklvl: 'h' } },
]

var blanka = {
    id: 'p2', name: 'blanka', fullname: 'Blanka Animal',
    width: 50, height: 100, health: 1000, stun: 200, power: 200, weight: 80, mov, atk, spmoves, cricarts,
    hurtbox: { x: 0, y: 0, width: 40, height: 100,
    comment: 'I did it!!!' }
}