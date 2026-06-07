import { useEffect } from 'react';

/**
 * useScrollAnimations — attaches an IntersectionObserver to all elements
 * that have a `data-animate` attribute and adds the `is-visible` class
 * when they scroll into view. Supports staggered children via
 * `data-stagger` on the parent.
 */
export default function useScrollAnimations(dependency) {
  useEffect(() => {
    const targets = document.querySelectorAll('[data-animate]');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            // Stagger children if requested
            const staggerParent = entry.target.querySelector('[data-stagger]');
            if (staggerParent) {
              Array.from(staggerParent.children).forEach((child, i) => {
                child.style.transitionDelay = `${i * 0.1}s`;
                child.classList.add('is-visible');
              });
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );

    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [dependency]);
}
