import type { Config } from 'tailwindcss'

const config: Config = {
	  content: [
		      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		          './src/components/**/*.{js,ts,jsx,tsx,mdx}',
			      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
			        ],
				  theme: {
					      extend: {
						            colors: {
								            bg: '#0a0a0f',
									            surface: '#11111a',
										            card: '#16161f',
											            border: '#2a2a3d',
												            purple: {
														              900: '#1a0a2e',
															                800: '#2d1254',
																	          700: '#3d1a72',
																		            600: '#5b2d9e',
																			              500: '#7c3fd4',
																				                400: '#9d64e0',
																						          300: '#bc8fec',
																							            200: '#d9bef5',
																								              100: '#f0e4fb',
																									              },
																										              accent: '#8b5cf6',
																											              accentLight: '#a78bfa',
																												              accentDim: '#6d28d9',
																													              good: '#22c55e',
																														              warn: '#f59e0b',
																															              danger: '#ef4444',
																																              textPrimary: '#e8e0f5',
																																	              textSecondary: '#9d8fc0',
																																		              textMuted: '#5a5275',
																																			            },
																																				          fontFamily: {
																																						          heading: ['var(--font-heading)', 'serif'],
																																							          body: ['var(--font-body)', 'sans-serif'],
																																								        },
																																									      backgroundImage: {
																																										              'purple-glow': 'radial-gradient(ellipse at 50% 0%, rgba(124,63,212,0.15) 0%, transparent 70%)',
																																											              'card-gradient': 'linear-gradient(135deg, #16161f 0%, #11111a 100%)',
																																												            },
																																													          animation: {
																																															          'fade-in': 'fadeIn 0.6s ease forwards',
																																																          'slide-up': 'slideUp 0.5s ease forwards',
																																																	          'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
																																																		        },
																																																			      keyframes: {
																																																				              fadeIn: {
																																																						                from: { opacity: '0' },
																																																								          to: { opacity: '1' },
																																																									          },
																																																										          slideUp: {
																																																												            from: { opacity: '0', transform: 'translateY(20px)' },
																																																													              to: { opacity: '1', transform: 'translateY(0)' },
																																																														              },
																																																															              pulseGlow: {
																																																																	                '0%, 100%': { boxShadow: '0 0 20px rgba(124,63,212,0.3)' },
																																																																			          '50%': { boxShadow: '0 0 40px rgba(124,63,212,0.6)' },
																																																																				          },
																																																																					        },
																																																																						    },
																																																																						      },
																																																																						        plugins: [],
}

export default config

