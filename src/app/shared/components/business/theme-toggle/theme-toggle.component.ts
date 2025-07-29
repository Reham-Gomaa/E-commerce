import { isPlatformBrowser } from '@angular/common';
import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-theme-toggle',
  imports: [],
  templateUrl: './theme-toggle.component.html',
  styleUrl: './theme-toggle.component.scss',
})
export class ThemeToggleComponent implements OnInit {
  private readonly pLATFORM_ID = inject(PLATFORM_ID);
  isDark!: boolean;

  ngOnInit(): void {
    if (!isPlatformBrowser(this.pLATFORM_ID)) return;

    document.documentElement.classList.toggle(
      'dark',
      localStorage.getItem('theme') === 'dark' ||
        (!('theme' in localStorage) &&
          window.matchMedia('(prefers-color-scheme: dark)').matches)
    );
    this.isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  toggleTheme() {
    if (!isPlatformBrowser(this.pLATFORM_ID)) return;

    if (localStorage.getItem('theme')) {
      if (localStorage.getItem('theme') === 'dark') {
        localStorage.setItem('theme', 'light');
        this.isDark = !this.isDark;
      } else {
        localStorage.setItem('theme', 'dark');
        this.isDark = !this.isDark;
      }
    } else {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        localStorage.setItem('theme', 'light');
        this.isDark = !this.isDark;
      } else {
        localStorage.setItem('theme', 'dark');
        this.isDark = !this.isDark;
      }
    }
    document.documentElement.classList.toggle(
      'dark',
      localStorage.getItem('theme') === 'dark' ||
        (!('theme' in localStorage) &&
          window.matchMedia('(prefers-color-scheme: dark)').matches)
    );
  }
}
