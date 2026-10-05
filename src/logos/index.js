/**
 * Logo beranimasi hasil pixel2motion (https://github.com/nolangz/pixel2motion):
 * logo raster di-vektorkan jadi SVG yang tiap bagiannya punya id sendiri,
 * lalu dikoreografi pakai CSS keyframes (<id>.css).
 *
 * `revealMs` = durasi reveal sampai frame akhir (T_end dari motion spec-nya).
 * Dipakai untuk melompat langsung ke frame akhir kalau reveal sudah pernah
 * diputar di page load yang sama.
 *
 * Semua id / class / keyframes di tiap logo wajib ber-prefix unik (mis. `pes-`)
 * karena SVG-nya di-inline bersamaan dalam satu halaman.
 */
import captiv8Svg from './captiv8.svg?raw'
import jhhSvg from './jhh.svg?raw'
import pesSvg from './pes.svg?raw'
import phmSvg from './phm.svg?raw'
import './captiv8.css'
import './jhh.css'
import './pes.css'
import './phm.css'

export const animatedLogos = {
  captiv8: { svg: captiv8Svg, revealMs: 1800 },
  pes: { svg: pesSvg, revealMs: 1800 },
  jhh: { svg: jhhSvg, revealMs: 1800 },
  phm: { svg: phmSvg, revealMs: 1700 },
}
