import { defineConfig, presetUno, presetAttributify, presetIcons, presetWind } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      cdn: 'https://esm.sh/'
    }),
    presetWind()
  ],
  theme: {
    colors: {
      primary: {
        DEFAULT: '#00A3FF',
        light: '#E6F7FF',
        dark: '#0091E6'
      },
      secondary: {
        DEFAULT: '#0F172A',
        light: '#1E293B',
        dark: '#0B1121'
      }
    },
    spacing: {
      '72': '18rem',
      '84': '21rem',
      '96': '24rem'
    },
    borderRadius: {
      'xl': '1rem',
      '2xl': '1.5rem'
    },
    boxShadow: {
      'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)'
    }
  },
  shortcuts: {
    'btn': 'px-4 py-2 rounded-lg transition-colors duration-200',
    'btn-primary': 'btn bg-primary text-white hover:bg-primary-dark',
    'btn-secondary': 'btn bg-secondary text-white hover:bg-secondary-dark',
    'input': 'w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary-light',
    'card': 'bg-white rounded-xl shadow-soft p-6',
    'modal': 'fixed inset-0 bg-black/50 flex items-center justify-center',
    'modal-content': 'bg-white rounded-xl shadow-soft p-6 max-w-lg w-full mx-4'
  }
}) 