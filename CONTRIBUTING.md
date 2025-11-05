# 🤝 Contributing to Amigos del Mar

Thank you for your interest in contributing to this project!

## 📋 Code of Conduct

- Be respectful and professional
- Write clean, documented code
- Test thoroughly before submitting
- Follow existing code style

## 🚀 Getting Started

1. Read [SETUP.md](./SETUP.md) for development setup
2. Make sure all tests pass: `npm run lint && npm run type-check`
3. Create a feature branch
4. Make your changes
5. Test on mobile and desktop
6. Submit for review

## 📝 Coding Standards

### TypeScript
- Use strict mode
- Define proper types (no `any`)
- Use interfaces for objects
- Document complex functions

### React
- Use functional components
- Use hooks properly
- Keep components small and focused
- Extract reusable logic

### Styling
- Use Tailwind CSS classes
- Follow mobile-first approach
- Ensure no horizontal scrolling
- Test on multiple screen sizes

### Translations
- Add keys to BOTH `en.ts` and `es.ts`
- Use descriptive key names
- Group related translations
- Test language switching

## 🧪 Testing Checklist

Before submitting:
- [ ] Code builds without errors
- [ ] No linting errors
- [ ] No TypeScript errors
- [ ] Tested on mobile (< 768px)
- [ ] Tested on desktop (> 1024px)
- [ ] Both languages work correctly
- [ ] No horizontal scrolling
- [ ] Images load correctly
- [ ] Forms validate properly
- [ ] Accessible (keyboard navigation works)

## 🌐 Translation Guidelines

When adding new features with text:
1. Add English text to `lib/translations/locales/en.ts`
2. Add Spanish text to `lib/translations/locales/es.ts`
3. Use `t('your.key')` in components
4. Test language switching works

## 🐛 Reporting Bugs

Include:
- Description of the issue
- Steps to reproduce
- Expected behavior
- Actual behavior
- Screenshots (if applicable)
- Browser/device information

## 💡 Suggesting Features

Include:
- Clear description
- Use case/benefit
- Mockups (if applicable)
- Implementation ideas

## 📞 Questions?

Contact: info@amigosdelmar.com

Thank you for contributing! 🙏

