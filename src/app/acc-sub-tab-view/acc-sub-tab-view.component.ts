import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-acc-sub-tab-view',
    templateUrl: './acc-sub-tab-view.component.html',
    styleUrls: ['./acc-sub-tab-view.component.css']
})
export class AccSubTabViewComponent implements OnInit {

    listAccordion: Array<{
        title: String,
        titleContent: Object,
        isOpen: Boolean,
        content: String
    }> = [{
        title: "Market name",
        titleContent: {
            members: 300,
            percentage: '24.4%',
            cleared: 10,
            cgpa: 4
        },
        isOpen: true,
        content: '<p>testing application content</p>'
    }, {
        title: "Market name",
        titleContent: {
            members: 300,
            percentage: '24.4%',
            cleared: 10,
            cgpa: 4
        },
        isOpen: false,
        content: '<p>testing application content</p>'
    }, {
        title: "Market name",
        titleContent: {
            members: 300,
            percentage: '24.4%',
            cleared: 10,
            cgpa: 4
        },
        isOpen: false,
        content: '<p>testing application content</p>'
    }, {
        title: "Market name",
        titleContent: {
            members: 300,
            percentage: '24.4%',
            cleared: 10,
            cgpa: 4
        },
        isOpen: false,
        content: '<p>testing application content</p>'
    }];

    constructor() {

    }

    ngOnInit() {

    }

    showAccordion(index, isOpen: Boolean) {
        this.listAccordion.filter((item) => { if (item.isOpen === true) { item.isOpen = false; } });
        this.listAccordion[index].isOpen = true;
    }
}